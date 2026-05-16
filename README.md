# SE Lab Git — Portfolio

A static frontend portfolio built with **React + Vite**, deployed automatically on **GitLab Pages** via GitLab CI/CD.

🌐 **Live Demo:** https://YOUR_USERNAME.gitlab.io/se-lab-git/

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — protected, merge only via MR |
| `dev` | Main development integration branch |
| `feature/ui` | UI components: Navbar, Hero, Footer |
| `feature/about` | Pages: About, Projects |
| `hotfix/navbar-fix` | Fix sticky navbar and brand name |

---

## Commit History Summary

| Commit Message | Branch |
|----------------|--------|
| init: initialize React Vite project structure | main |
| config: set vite base path for GitLab Pages | dev |
| ci: add GitLab CI/CD pipeline | dev |
| feat(ui): add Navbar component | feature/ui |
| feat(ui): add Hero section | feature/ui |
| feat(ui): add Footer component | feature/ui |
| feat(ui): integrate components into App | feature/ui |
| feat(about): add About page | feature/about |
| feat(about): add Projects page | feature/about |
| feat(about): add About and Projects to App | feature/about |
| fix: resolve conflict feature/ui and feature/about | dev |
| feat: add Contact section | dev |
| feat: integrate Contact into App | dev |
| style: add global CSS reset | dev |
| feat(projects): add fourth project and tech stack | dev |
| style(about): improve About layout | dev |
| hotfix: make Navbar sticky and fix brand name | hotfix/navbar-fix |
| style(navbar): add font-weight to nav links | dev |
| fix: resolve conflict hotfix and dev in Navbar | dev |
| style(hero): update Hero subtitle | dev |
| style(footer): add GitLab link | dev |
| build: verify production build | dev |
| docs: complete README documentation | dev |

---

## Conflicts Resolved

### Conflict 1 — `src/App.jsx`
- **Where:** merge `feature/about` → `dev`
- **Cause:** هر دو branch فایل App.jsx را با import های متفاوت ویرایش کرده بودند
- **Resolution:** ترکیب هر دو نسخه با تمام import ها و ترتیب صحیح کامپوننت‌ها

### Conflict 2 — `src/components/Navbar.jsx`
- **Where:** merge `hotfix/navbar-fix` → `dev`
- **Cause:** hotfix برند و sticky را تغییر داد، dev هم font-weight را تغییر داد
- **Resolution:** نگه‌داشتن هر دو تغییر (sticky + brand از hotfix، font-weight از dev)

---

## CI/CD Pipeline

GitLab CI/CD به صورت خودکار بعد از هر push به `main` اجرا می‌شود:
1. **build:** نصب dependencies و build پروژه
2. **deploy:** انتقال خروجی به GitLab Pages

Pipeline file: `.gitlab-ci.yml`


# پاسخ سوالات آزمایشگاه مهندسی نرم‌افزار

## ۱. پوشه‌ی `.git` چیست؟

پوشه‌ی `.git` **قلب مخزن Git** است. وقتی یک پروژه را با Git مدیریت می‌کنیم، تمام اطلاعات نسخه‌بندی درون این پوشه‌ی مخفی ذخیره می‌شود.

### ساخته می‌شود با:
```bash
git init
```
این دستور یک پوشه‌ی `.git` در دایرکتوری جاری می‌سازد.

### اطلاعاتی که در `.git` ذخیره می‌شود:

| فایل/پوشه | محتوا |
|---|---|
| `HEAD` | اشاره‌گر به branch یا commit جاری |
| `config` | تنظیمات محلی مخزن (نام remote، email، ...) |
| `objects/` | تمام داده‌های پروژه (commits, trees, blobs, tags) به صورت فشرده |
| `refs/` | اشاره‌گرهای branches و tags |
| `index` | فایل stage (staging area) |
| `logs/` | تاریخچه‌ی تغییر HEADها و branchها |
| `COMMIT_EDITMSG` | پیام آخرین commit |
| `hooks/` | اسکریپت‌های اتوماتیک (pre-commit, post-merge, ...) |

> **تشبیه:** پوشه‌ی `.git` مثل دفترچه‌ی ثبت اسناد یک ساختمان است — هر تغییری که در ساختمان (پروژه) داده شده، اینجا ثبت شده است.

---

## ۲. منظور از Atomic بودن در Atomic Commit و Atomic Pull-Request

**Atomic** از علوم کامپیوتر به معنای **«تقسیم‌ناپذیر»** است — یا کاملاً انجام می‌شود یا اصلاً انجام نمی‌شود.

### Atomic Commit:
یک commit باید **فقط یک تغییر منطقی مشخص** داشته باشد؛ نه بیشتر، نه کمتر.

- ✅ درست: `fix: null pointer exception in login service`
- ❌ اشتباه: `fix login bug + add new feature + refactor database`

**ویژگی‌های یک atomic commit:**
- یک مسئله را حل می‌کند
- به تنهایی قابل فهم است
- بدون آن commit، کد کامپایل/اجرا می‌شود؛ با آن هم همینطور
- به راحتی قابل revert است بدون اینکه چیز دیگری خراب شود

### Atomic Pull-Request:
یک PR باید **یک هدف واحد و مستقل** داشته باشد تا:
- review آن ساده باشد
- در صورت رد شدن، کار دیگری آسیب نبیند
- تاریخچه‌ی پروژه خوانا بماند

> **تشبیه:** atomic commit مثل یک وظیفه در لیست کارهاست — «خرید نان». نه «خرید نان + پختن ناهار + تمیز کردن خانه».

---

## ۳. تفاوت دستورهای `fetch`، `pull`، `merge`، `rebase`، `cherry-pick`

### جدول مقایسه‌ای:

| دستور | کار اصلی | تغییر working directory؟ | تغییر تاریخچه؟ |
|---|---|---|---|
| `fetch` | دانلود تغییرات remote، بدون اعمال | ❌ | ❌ |
| `pull` | fetch + merge (یا rebase) | ✅ | ✅ |
| `merge` | ادغام دو branch با ساخت یک merge commit | ✅ | ✅ (غیر مخرب) |
| `rebase` | جابجا کردن commitها روی یک branch دیگر | ✅ | ✅ (بازنویسی) |
| `cherry-pick` | کپی کردن یک commit خاص به branch جاری | ✅ | ✅ |

### توضیح هر دستور:

#### `git fetch`
```bash
git fetch origin
```
فقط تغییرات را از remote **دانلود** می‌کند و در `origin/main` نگه می‌دارد. کد محلی شما دست نمی‌خورد. ابتدا ببینید چه خبر است، بعد تصمیم بگیرید.

#### `git pull`
```bash
git pull origin main
```
معادل `git fetch` + `git merge` است. تغییرات remote را می‌آورد و با branch جاری ادغام می‌کند.

#### `git merge`
```bash
git merge feature-branch
```
دو branch را با هم ترکیب می‌کند و یک **merge commit** می‌سازد. تاریخچه را حفظ می‌کند.

```
      A---B---C  feature
     /         \
D---E---F---G---H  main (merge commit)
```

#### `git rebase`
```bash
git rebase main
```
commitهای branch جاری را **برمی‌دارد** و از نقطه‌ی جدیدتری روی branch هدف **بازنویسی** می‌کند. تاریخچه خطی و تمیز می‌شود اما hash commitها عوض می‌شود.

```
قبل:   A---B---C  feature
           /
      D---E---F  main

بعد:           A'--B'--C'  feature
              /
      D---E---F  main
```

> ⚠️ **هشدار:** هرگز روی branch عمومی (مثل `main`) که دیگران از آن استفاده می‌کنند rebase نکنید.

#### `git cherry-pick`
```bash
git cherry-pick a1b2c3d
```
فقط **یک commit مشخص** را (با hash آن) از هر جایی برمی‌دارد و روی branch جاری اعمال می‌کند. برای انتقال یک bugfix خاص بدون merge کل branch مفید است.

---

## ۴. تفاوت دستورهای `reset`، `revert`، `restore`، `switch`، `checkout`

### جدول مقایسه‌ای:

| دستور | هدف اصلی | روی تاریخچه تأثیر دارد؟ | خطرناک؟ |
|---|---|---|---|
| `reset` | بازگشت HEAD به commit قبلی | ✅ (بازنویسی) | ⚠️ بله |
| `revert` | خنثی‌سازی یک commit با commit جدید | ❌ (ایمن) | ✅ خیر |
| `restore` | بازگرداندن فایل به حالت قبل | ❌ | ⚠️ برای فایل |
| `switch` | تغییر branch | ❌ | ✅ خیر |
| `checkout` | چندکاره (قدیمی) | بستگی دارد | ⚠️ گیج‌کننده |

### توضیح هر دستور:

#### `git reset`
```bash
git reset --soft HEAD~1   # commit را پس می‌گیرد، تغییرات در stage می‌مانند
git reset --mixed HEAD~1  # commit را پس می‌گیرد، تغییرات unstaged می‌شوند (پیش‌فرض)
git reset --hard HEAD~1   # commit را پس می‌گیرد و تغییرات را کاملاً حذف می‌کند
```
HEAD را به عقب می‌برد. با `--hard` تغییرات **برای همیشه** از بین می‌روند.

#### `git revert`
```bash
git revert a1b2c3d
```
یک **commit جدید** می‌سازد که اثر commit قبلی را خنثی می‌کند. تاریخچه دست نمی‌خورد. برای branch‌های عمومی **ایمن‌ترین روش** است.

#### `git restore`
```bash
git restore file.txt           # تغییرات unstaged یک فایل را پاک می‌کند
git restore --staged file.txt  # فایل را از stage خارج می‌کند
```
فقط روی **فایل‌ها** کار می‌کند، نه commitها.

#### `git switch`
```bash
git switch main          # رفتن به branch main
git switch -c new-branch # ساختن و رفتن به branch جدید
```
فقط برای **تغییر branch** است. جایگزین مدرن‌تر و واضح‌تر `checkout` برای این کار.

#### `git checkout` (قدیمی و چندکاره)
```bash
git checkout main           # تغییر branch (= git switch main)
git checkout file.txt       # بازگرداندن فایل (= git restore file.txt)
git checkout a1b2c3d        # رفتن به یک commit خاص (detached HEAD)
```
در Git مدرن (2.23+) توصیه می‌شود به جای آن از `switch` و `restore` استفاده کنید.

---

## ۵. Stage (Index) چیست؟ دستور `stash` چه می‌کند؟

### Stage یا Index:
**Staging area** یک **ناحیه‌ی میانی** بین working directory و repository است.

```
Working Directory  →  [git add]  →  Stage (Index)  →  [git commit]  →  Repository
```

وقتی `git add` می‌زنید، فایل‌ها وارد stage می‌شوند — یعنی آماده‌ی commit شدن هستند. این امکان می‌دهد **انتخابی** commit کنید؛ مثلاً از ۵ فایل تغییر یافته، فقط ۲ تای آن‌ها را در یک commit بگذارید.

```bash
git add file1.txt        # فقط این فایل را stage کن
git add -p               # تغییرات را patch به patch انتخاب کن
git status               # ببین چه چیزی staged است
```

> **تشبیه:** stage مثل سبد خرید است — اجناس را از قفسه (working directory) برمی‌دارید، در سبد (stage) می‌گذارید، و نهایتاً پول می‌دهید (commit).

---

### دستور `git stash`:
```bash
git stash           # تغییرات ناتمام را ذخیره‌ی موقت کن و working directory را تمیز کن
git stash pop       # آخرین stash را برگردان
git stash list      # لیست همه‌ی stashها
git stash apply stash@{2}  # یک stash خاص را برگردان (بدون حذف آن)
```

**کاربرد:** وقتی در وسط کاری هستید و باید فوری به branch دیگری بروید، اما تغییراتتان هنوز آماده‌ی commit نیست، `stash` آن‌ها را کنار می‌گذارد.

> **تشبیه:** stash مثل کشوی میز کار است — کارهای نیمه‌کاره را سریع داخلش می‌ریزید، میز را تمیز می‌کنید، کار فوری را انجام می‌دهید، بعد کشو را باز می‌کنید و ادامه می‌دهید.

---

## ۶. مفهوم Snapshot و ارتباط آن با Commit

### Snapshot چیست؟
Git برخلاف بسیاری از سیستم‌های version control (مثل SVN) که **تفاوت‌ها (diff)** را ذخیره می‌کنند، در هر commit یک **عکس فوری (snapshot)** از **کل پروژه** در آن لحظه می‌گیرد.

### ارتباط با Commit:
هر commit در واقع شامل این اطلاعات است:
- اشاره‌گر به **snapshot** کامل فایل‌های پروژه (نه فقط تغییرات)
- اشاره‌گر به **commit والد** (parent)
- metadata: نام نویسنده، زمان، پیام commit

```
Commit A          Commit B          Commit C
┌─────────┐      ┌─────────┐      ┌─────────┐
│Snapshot1│◄─────│Snapshot2│◄─────│Snapshot3│
│ parent:─┼──►─  │ parent:─┼──►─  │ parent:─┼──►─
│ tree    │      │ tree    │      │ tree    │
└─────────┘      └─────────┘      └─────────┘
```

### بهینه‌سازی Git:
برای صرفه‌جویی در حافظه، اگر فایلی **تغییر نکرده** باشد، Git آن را دوباره ذخیره نمی‌کند بلکه فقط **اشاره‌گر** به همان blob قبلی را نگه می‌دارد.

> **تشبیه:** به جای اینکه بگویید «نسبت به دیروز، فقط صفحه‌ی ۵ عوض شد»، Git هر بار یک عکس کامل از کل کتاب می‌گیرد — ولی اگر صفحه‌ای تغییر نکرده، از همان صفحه‌ی عکس قبلی استفاده می‌کند (نه کپی جدید).

این رویکرد باعث می‌شود:
- جابجایی بین commitها **سریع** باشد
- عملیات branching **آنی** باشد
- مقایسه و merge **کارآمد** باشد

---

## ۷. تفاوت Local Repository و Remote Repository

| ویژگی | Local Repository | Remote Repository |
|---|---|---|
| **محل** | روی کامپیوتر شما | روی سرور (GitHub, GitLab, ...) |
| **دسترسی** | فقط شما | همه‌ی اعضای تیم |
| **نیاز به اینترنت** | ❌ خیر | ✅ بله |
| **سرعت عملیات** | ⚡ بسیار سریع | 🐢 وابسته به شبکه |
| **مثال** | `~/projects/my-app/.git` | `https://github.com/user/my-app` |

### دستورات ارتباطی:

```bash
# اتصال local به remote
git remote add origin https://github.com/user/repo.git

# ارسال تغییرات به remote
git push origin main

# دریافت تغییرات از remote
git pull origin main

# مشاهده‌ی remoteهای تعریف‌شده
git remote -v
```

### جریان کار معمول:
```
Local Repo  ──[push]──►  Remote Repo
            ◄──[pull]──
            ◄──[fetch]──
```

> **تشبیه:** local repository مثل **دفترچه‌ی یادداشت شخصی** شماست — هر وقت خواستید می‌نویسید. Remote repository مثل **تابلوی اعلانات مشترک** تیم است — وقتی چیزی آماده شد، آنجا می‌گذارید تا بقیه ببینند.

**نکته‌ی مهم:** شما می‌توانید **کاملاً آفلاین** روی local repository کار کنید (commit, branch, merge) و بعداً نتیجه را push کنید. این یکی از مزایای بزرگ Git نسبت به سیستم‌های متمرکز مثل SVN است.

