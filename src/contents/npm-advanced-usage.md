---
title: 'npm — Gelişmiş Kullanım'
date: '2023-08-14'
author: 'Altan Kurt'
excerpt: 'Paket yönetimi, modern yazılım geliştirmenin vazgeçilmez bir parçasıdır. 
İlk yazımızda npm’in temel kavramlarını ele aldık ve şimdi bu temelleri daha da ileri taşıyarak gelişmiş paket yönetimi stratejilerine bakacağız.'
lang: 'tr'
cover: 'cover.webp'
---

> Yazı dizisinin ikinci bölümüne hoş geldiniz.
> Serinin ilk yazısını okumadıysanız veya temel kavramları hızlıca gözden geçirmek isterseniz linkten ulaşabilirsiniz.
>
> ["npm - Node Package Manager"](./npm.md)

## Gelişmiş Paket Yönetimi

Paket yönetimi, modern yazılım geliştirmenin vazgeçilmez bir parçasıdır. İlk yazımızda npm'in temel kavramlarını ele aldık ve şimdi bu temelleri daha da ileri taşıyarak gelişmiş paket yönetimi stratejilerine bakacağız.

### 1. Paket Versiyonlama Stratejileri

Paket versiyonlama stratejileri, yazılım projelerinizde kullanılan paketlerin versiyonlarını yönetmenin önemli bir yoludur. Projenizin gereksinimlerine göre doğru versiyonları seçmek, uyumluluk sorunlarını önlemek ve güvenliği sağlamak için kritik bir adımdır.

### 2. Beta ve Alfa Sürümlerini Kullanma

Beta ve alfa sürümleri, yazılım paketlerinin geliştirme sürecinin farklı aşamalarında kullanılan ön sürümlerdir. Beta sürümleri, genellikle test edilmek üzere yayınlanırken, alfa sürümleri daha erken aşamalarda geliştirici topluluğunun geri bildirimini almak için kullanılır.
Bir paketin beta sürümünü nasıl kurup kullanacağınızı gösterelim:

```js
npm install package-name@beta
```

Bu komut, package-name paketinin en son beta sürümünü yükler.

### 3. Bağımlılıklar (Dependencies)

Projelerinizi geliştirirken başka paketleri kullanmanız gerekebilir. Bu paketlere "bağımlılıklar" denir. Bağımlılıklar, projenizin diğer paketlerle iletişim kurabilmesi ve işlevselliği sağlayabilmesi için gereklidir. Örneğin, bir web uygulaması geliştiriyorsanız, CSS çerçeveleri veya veritabanı işlevselliği sağlamak için belirli paketlere bağımlı olabilirsiniz. Bu bağımlılıklar package.json dosyasında belirtilir ve npm tarafından otomatik olarak yönetilir.

```js
{
  "dependencies": {
    "express": "^4.17.1",
    "express-async-handler": "^1.1.4"
  }
}
```

Bu örnekte, express ve express-async-handler paketleri bağımlılıklar olarak belirtilmiştir.

### 4. Forklama ve Bağlı Projeler

Projelerinizin özelleştirilmiş bir sürümünü başka bir projede kullanmak isteyebilirsiniz. Bu durumda, projenizi forklayarak özelleştirmelerinizi yapabilirsiniz. Daha sonra, ana projeye geri dönüş yapabilir veya bağlı projeleri bu özelleştirilmiş sürümle senkronize edebilirsiniz.

### 5. Çalışma Ortamınızı Optimize Etme

Verimli bir geliştirme süreci için çalışma ortamınızı optimize etmek önemlidir. Örneğin, projenizin ihtiyaç duyduğu paketleri yerel olarak nasıl saklayabileceğinizi öğrenerek geliştirme hızınızı artırabilirsiniz. Ayrıca, npm scriptleri kullanarak projenizin gereksinimlerini otomatik olarak nasıl güncelleyebileceğinizi öğrenebilirsiniz.

```js
{
  "scripts": {
    "update": "npm update"
  }
}
```

Bu örnekte, npm run update komutuyla projenizin bağımlılıklarını güncelleyebilirsiniz.

![wombats](wombats-mascot.webp)

## npm Scriptleri ve Otomasyon

Bu başlık altında, projenizin geliştirme sürecini otomatikleştirmek ve tekrarlayan görevleri kolayca yönetmek için npm scriptlerinin nasıl kullanılacağını anlatmaya çalıştım.

### 1. package.json Dosyasında Script Tanımlama

Projelerinizi geliştirirken sık sık kullanmanız gereken işlemleri, npm scriptleri ile otomatikleştirebilirsiniz. `package.json` projenin yerel bağlamında yüklü olan komut satırı araçlarını çalıştırmak için tanımlanabilen bir `scripts` özelliğini de destekler.
Örnek bir `scripts`:

```js
{
  "scripts": {
    "build": "tsc",
    "format": "prettier --write **/*.ts",
    "format-check": "prettier --check **/*.ts",
    "lint": "eslint src/**/*.ts",
    "pack": "ncc build",
    "test": "jest",
    "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
  }
}
```

`eslint`, `prettier`, `ncc`, ve `jest`'in global olarak değil, projenizin yerelinde `node_modules/.bin/` dizini altına yüklenmesi gerekmektedir.

Bu `node_modules` proje kapsamındaki komutları, `npx …` önekini kullanarak yani (`npx prettier --write **/*.ts`) global olarak yüklenmiş bir program gibi çalıştırmamıza olanak tanır.

### 2. package-lock.json nedir?

`package-lock.json`, bir Node.js projesinde kullanılan ve projenin bağımlılıklarını ve bu bağımlılıkların belirli versiyonlarını içeren bir dosyadır. Bu dosya, proje bağımlılıklarının belirli versiyonlarının ve bağımlılık ağacının sabitlenmesini sağlayarak, projenin farklı ortamlarda (farklı geliştirici makineleri, sunucular vb.) tutarlı bir şekilde çalışmasına yardımcı olur.

`package-lock.json` dosyası, projede kullanılan her bir paketin adını, versiyonunu ve bağımlı olduğu diğer paketleri içerir. Bu dosya aynı zamanda bağımlılıkların versiyonlarını "sabitleyen" bir yapıya sahiptir, böylece farklı yüklemelerde veya paket güncellemelerinde istenmeyen versiyon değişiklikleri oluşmaz.

Bu dosya ayrıca bağımlılıkların indirilip yüklendiği klasörü de belirtir. Bu sayede bir proje klonlandığında veya taşındığında, `package-lock.json` dosyası kullanılarak projenin tam olarak aynı bağımlılıklara sahip olması sağlanır.

Sonuç olarak, `package-lock.json` dosyası projenin tekrarlanabilirliğini ve güvenilirliğini artırmak amacıyla kullanılan önemli bir dosyadır ve genellikle projenin kök dizininde bulunur.

### 3. Pre- ve Post- Hooks Kullanımı

npm scriptlerinde `pre-` ve `post-` önekleri ile tanımladığınız işlemler, belirli bir script çalıştırılmadan önce veya sonra otomatik olarak gerçekleşir.

```js
{
  "scripts": {
    "prestart": "echo 'Hazırlık işlemleri yapılıyor...'",
    "poststart": "echo 'Proje başlatıldı.'"
  }
}
```

Bu örnekte, `npm start` komutu öncesinde ve sonrasında belirtilen işlemler gerçekleşir.

### 4. Paralel ve Sıralı Görevler Oluşturma

Birden fazla işlemi aynı anda (paralel) veya sırayla (sıralı) çalıştırmak için npm scriptlerini kullanabilirsiniz.

```js
{
  "scripts": {
    "build": "npm run lint && npm run compile",
    "lint": "eslint src",
    "compile": "babel src -d dist"
  }
}
```

Bu örnekte, `npm run build` komutu ile `lint` ve `compile` işlemleri sırayla çalıştırılır.

### 5. Scriptlerde Değişken Kullanımı

npm scriptlerinde değişkenleri kullanarak daha esnek ve dinamik işlemler oluşturabilirsiniz.

```js
{
  "scripts": {
    "start": "node server.js",
    "start:dev": "PORT=3000 npm start"
  }
}
```

Bu örnekte, `npm run start:dev` komutu ile farklı bir port üzerinden projeyi başlatabilirsiniz.

### 6. Örnek Otomasyon Senaryoları

Projenizin özel ihtiyaçlarına göre karmaşık otomasyon senaryoları oluşturabilirsiniz.

```js
{
  "scripts": {
    "deploy": "npm run build && scp -r dist/ user@server:path"
  }
}
```

Bu örnekte, `npm run deploy` komutu ile projeyi derleyip uzak sunucuya dağıtabilirsiniz.

![npm publish](publish.webp)

## Registry ve Yayınlama

Bu başlık altında, projelerinizi npm Registry'de nasıl yayınlayabileceğinizi ve yönetebileceğinizi inceleyeceğiz. Aynı zamanda, projelerinizi paketler haline getirirken dikkat etmeniz gereken önemli noktalara da değineceğiz.

### 1. Paket Oluşturma ve Yayınlama

İlk adım, projenizin ana dizininde `package.json` dosyasını oluşturmak veya güncellemektir. Bu dosya, projenizin temel bilgilerini içerir.

```js
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### 2. Gereksinimleri Ekleyin ve Kodu Düzenleyin

Projeyi pakete dönüştürmek için gereken dosyaları/kodları (örneğin, "index.js" gibi) ekleyin ve gerektiğinde kaynak kodunuzu düzenleyin.

### 3. npm'e Oturum Açın

Yeni bir paket oluşturmadan önce npm'e oturum açmanız gerekmekte. Terminalde aşağıdaki komutu kullanarak oturum açabilirsiniz.

```js
npm login
```

Kullanıcı adı, parola ve e-posta adresi bilgilerini girin.

### 4. Projeyi npm'de Yayınlama

Artık projenizi npm Registry'ye yayınlamaya hazırsınız. Terminalde aşağıdaki komutu kullanarak projeyi yayınlayabilirsiniz.

```js
npm publish
```

### 5. Projenin Yayınlandığını Kontrol Etme

Projeyi başarıyla yayınladıktan sonra, npm Registry'de projenizin sayfasını ziyaret ederek yayınlandığını kontrol edebilirsiniz. Örneğin; [https://www.npmjs.com/package/my-awesome-package](https://www.npmjs.com/package/my-awesome-package)
Ardından paketinizi test etmek için `npm install`'ı paket dizininizin yolu ile çalıştırın.

```js
npm install my-awesome-package
```

--

## Scoped Paketler ve Yayınlama

Scoped paketler, projenizin veya organizasyonunuzun adıyla başlayan paketlerdir. Bu paketleri oluşturmak ve yayınlamak için aşağıdaki adımları izleyebilirsiniz.

### 1. "package.json" Dosyasını Güncelleme

Scoped paketler oluştururken, `name` alanına kapsamlı adı eklemeniz gerekmektedir. Aynı zamanda, paketin `main` dosyasını ve diğer gereksinimlerini belirtmeyi unutmayın.

```js
{
  "name": "@myorg/my-awesome-package",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### 2. Projeyi npm'de Yayınlama

Scoped paketleri yayınlamak için `npm publish` komutunu kullanabilirsiniz. Ancak, bu paketi genel olarak yayınlamak istiyorsanız - `--access public` seçeneğini eklemeniz gerekmektedir.

```js
npm publish --access public
```

### 3. Projeyi Yayınlandığını Kontrol Etme

Scoped paketi başarıyla yayınladıktan sonra, npm Registry'de paketinizin sayfasını ziyaret ederek yayınlandığını kontrol edebilirsiniz. Örneğin; [https://www.npmjs.com/package/@myorg/my-awesome-package](https://www.npmjs.com/package/@myorg/my-awesome-package)

--

![semantic versioning](semantic-versioning.webp)

## Semantik Sürümleme ve Değişiklik Günlükleri

Semantik Sürümleme (Semantic Versioning), projenizin yeni sürümlerini numaralandırma ve bu sürümlerin ne tür değişiklikler içerdiğini belirtme yöntemidir. Bu sürüm numaraları şunları ifade eder:

- **Ana Versiyon Numarası (Major Version):** Büyük değişiklikler olduğunda artırılır. Geriye dönük uyumsuz değişiklikler içerdiğinde kullanılır.
- **Minör Versiyon Numarası (Minor Version):** Yeni özellikler eklediğinizde veya mevcut özellikleri geliştirdiğinizde artırılır. Geriye dönük uyumlu değişiklikler içerir.
- **Düzeltme Numarası (Patch Version):** Geriye dönük uyumlu düzeltmeler ve hata düzeltmeleri yapıldığında artırılır.

```js
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

Değişiklik Günlükleri (Change Logs), her sürümde yapılan değişiklikleri ve eklemeleri belgelemek için kullanılır. Bu, diğer geliştiricilerin projenizi nasıl ve neden kullanmaları gerektiğini anlamalarını sağlar.

Sürüm numaralarını ve değişiklikleri **"CHANGELOG.md"** dosyasında belgelemek iyi bir uygulamadır. Bu, projenizin sürdürülebilirliğini ve işbirliğini artırır.

## Paket İndirme İstatistikleri ve Analizleri

Paket istatistiklerini görüntülemek için terminalde aşağıdaki komutu kullanabilirsiniz.

```js
npm stats package-name
```

Paket analiz araçları, daha ayrıntılı bilgi almanıza yardımcı olabilir. Örneğin, `npm trends` veya `npm package analyzer` gibi araçları deneyebilirsiniz.

## npm ve Güvenlik

Bu bölümde, projelerinizde paketlerin güvenliğini nasıl sağlayacağınızı ve güvenlik tehditlerini nasıl ele alabileceğinizi öğreneceksiniz.

### 1. Bağımlılık Kontrolleri ve Güncelleme Stratejileri

Projenizde kullandığınız paketlerin güvenliğini sağlamak için düzenli olarak **bağımlılık kontrolleri** yapmalısınız. Bu adımı nasıl atacağınızı ve güncelleme stratejilerinizi nasıl belirleyeceğinizi inceleyelim:

- **Bağımlılıkları İncelenme ve Güncelleme:** Projedeki paketleri düzenli olarak kontrol edin ve yeni sürümlerini inceleyin. Güvenlik güncellemeleri varsa, paketleri güncelleyerek **riskleri azaltın**.
- **Sürüm Kısıtlamaları ve Uyum:** Bağımlılıklarınızın sürüm kısıtlamalarını belirleyerek, **uyumlu** ve **güvenilir paketleri** seçin. Örneğin, caret(^) veya tilde(~) gibi sembollerle sürüm aralıkları belirtebilirsiniz.

### 2. Zafiyet Analiz Araçları ve Kullanımı

Paketlerdeki güvenlik zafiyetlerini tespit etmek için çeşitli analiz araçları bulunmaktadır. Bu araçları kullanarak projenizdeki potansiyel riskleri değerlendirebilirsiniz:

- **npm Audit:** npm tarafından sağlanan bu araç, projedeki bağımlılıkları tarar ve güvenlik zafiyetlerini raporlar. Terminalde `npm audit` komutunu kullanarak tarama yapabilirsiniz.
- **Snyk, WhiteSource, Sonatype Nexus:** Üçüncü taraf araçlar, projenizdeki zafiyetleri analiz edebilir ve raporlayabilir. Projelerinizi bu araçlarla taramayı düşünebilirsiniz.

### 3. Güvenli npm Scriptleri Oluşturma

npm scriptleri, projenizi otomatikleştirmek için kullanılırken güvenliği de sağlamak önemlidir. İşte güvenli npm scriptleri oluştururken dikkat etmeniz gereken noktalar:

- **Komut Kısıtlamaları:** Scriptlerde kullanılan komutları kısıtlayarak, kötü niyetli kodların çalışmasını engelleyebilirsiniz.
- **Çevresel Değişkenlerin Kontrolü:** Scriptlerde kullanılan çevresel değişkenlerin güvenli olduğundan emin olun. Kullanıcı tarafından kontrol edilen değişkenlerin zararlı kullanımını önleyin.

### 4. Dependency Tree Kontrolü

Projenizin bağımlılık ağacını (dependency tree) incelemek, projenizdeki paketlerin nasıl birbirine bağımlı olduğunu anlamak için önemlidir:

- **dependency-tree, npm ls Komutları:** Bu komutlarla projenizin bağımlılık ağacını inceleyebilirsiniz. Bu şekilde paketler arasındaki ilişkileri anlayabilirsiniz.
- **Fazla Derinlikten Kaçınma:** Bağımlılık ağacınızı fazla derinleştirmemeye çalışın. Gereksiz ve karmaşık bağımlılıklar projenizin güvenliğini risk altına sokabilir.

![package-manager](package-manager.webp)

## Diğer Paket Yöneticileri

Bu bölümde, Yarn ve pnpm gibi popüler paket yöneticilerini npm ile karşılaştırarak avantajlarını ve dezavantajlarını inceleyeceğiz. Ayrıca, bu yöneticilerden hangisini seçmeniz gerektiğine dair öneriler sunacağız.

**Yarn**

Yarn, Facebook tarafından geliştirilen bir paket yöneticisidir. npm ile uyumlu bir şekilde çalışırken hızlı indirme ve güvenli yükleme mekanizması gibi özellikler sunar.

**pnpm**

pnpm, birden çok proje arasında bağımlılıkları paylaşma konusunda öne çıkan bir alternatif paket yöneticisidir. Disk alanı ve indirme süresi tasarrufu sağlayan tek bir depo kullanımıyla dikkat çeker.

### npm, Yarn ve pnpm Karşılaştırması

Bu üç paket yöneticisi arasında seçim yaparken, farklı özellikleri ve avantajları göz önünde bulundurmalısınız.

**npm:**

- npm, Node.js ve JavaScript topluluğunda en yaygın kullanılan paket yöneticisidir.
- Büyük bir paket deposuna ve geniş bir ekosisteme sahiptir.
- Yenilikleri hızlı bir şekilde benimser.
- Topluluk desteği ve güncellemeler konusunda güçlüdür.

**Yarn:**

- Hızlı indirme ve yükleme performansı sunar.
- Yarn Workspaces özelliği ile birden fazla projeyi tek bir depo içinde yönetmeye imkan tanır.
- Yarn Berry sürümü ile Plug'n'Play özelliği, gereksinim dosyasına ihtiyaç duymadan paketleri kullanmanıza olanak sağlar.

**pnpm:**

- Tek bir depo kullanımı sayesinde disk alanı tasarrufu yapar.
- Hızlı indirme ve yükleme performansı sunar.
- Çoğaltma yerine sembolik bağlantılar kullanarak bağımlılıkları yönetir.

### Hangisini Seçmeli, Neden?

Paket yöneticisi seçimi, projenizin ihtiyaçlarına ve gereksinimlerine göre yapılmalıdır. İşte npm, Yarn ve pnpm arasında seçim yaparken dikkate alabileceğiniz faktörler:

- **Proje Karmaşıklığı:** Projeniz ne kadar karmaşıksa, bağımlılıkları yönetmek ve projenin bütünlüğünü sağlamak o kadar önemlidir. Yarn ve pnpm, Workspaces veya tek bir depo kullanımı gibi özellikler sunarak projelerinizi daha iyi yönetmenize yardımcı olabilir.
- **Performans:** Projelerin performansı sizin için önemliyse, Yarn ve pnpm gibi paket yöneticileri daha hızlı indirme ve yükleme performansı sunabilir. Bu özellik, geliştirme süreçlerinizi hızlandırabilir.
- **Disk Alanı:** Disk alanı tasarrufu yapmak istiyorsanız, pnpm tek bir depo kullanımı ve sembolik bağlantılarla bağımlılıkları yöneterek disk alanını optimize edebilir.
- **Topluluk Desteği ve Ekosistem:** npm, geniş bir topluluk ve büyük bir paket deposuna sahiptir. Popüler ve geniş kapsamlı projeler için npm genellikle iyi bir seçenektir.
- **Yenilikler ve Gelişmeler:** Yarn ve pnpm gibi alternatif yöneticiler, özellikle yenilikçi ve gelişmeye açık projeler için daha cazip olabilir.
- **Mevcut Projeler ve Geçiş:** Mevcut projelerinizde hangi paket yöneticisini kullanıyorsanız, geçiş yaparken yaşanabilecek zorlukları ve avantajları değerlendirmelisiniz.

Sonuç olarak, projenizin **ihtiyaçlarına, ekosisteminize ve tercihlerinize** bağlı olarak npm, Yarn veya pnpm arasından seçim yapabilirsiniz. Her paket yöneticisinin kendine özgü avantajları ve dezavantajları olduğundan, projenizin gereksinimlerini dikkatlice değerlendirmeniz önemlidir. Ayrıca, **projenizin büyüklüğü, ekibinizin deneyimi ve kullanım senaryolarınız** da seçiminizi etkileyebilir.

## npx nedir ve Gelişmiş Senaryolar

Bu bölümde, "npx" komutunu ve bu komutun kullanımını detaylı bir şekilde inceleyeceğiz. Ayrıca, npx kullanarak nasıl gelişmiş senaryolar oluşturabileceğinizi göstermeye çalışacağım.

### npx nedir?

"npx", npm paketlerini çalıştırmak veya kullanmak için kullanılan bir komuttur. Özellikle, projelerinizde **geçici** olarak kullanmanız gereken paketleri kolayca çalıştırmanıza olanak tanır. npx, yerel veya global yüklü olmayan paketleri de kullanabilmenizi sağlar.

### npx Kullanarak Geçici Paketler Çalıştırma

Bir paketi yerel olarak yüklemek yerine, npx aracılığıyla **geçici olarak çalıştırmak**, projenizi hızlı ve düzensiz bir şekilde geliştirmenizi sağlar.

```js
npx create-react-app my-app
```

Bu komut, `create-react-app paketini` indirmez, sadece geçici olarak çalıştırır.

### Birden Fazla Komutu Zincirleme

npx, birden fazla komutu kolayca zincirlemek için de kullanılabilir. Bu sayede, projenizde karmaşık işlemleri basit ve okunabilir bir şekilde gerçekleştirebilirsiniz.

```js
npx concurrently "npm run server" "npm run client"
```

Bu komut, aynı anda `npm run server` ve `npm run client` komutlarını çalıştırır.

### Özel npx Scriptleri Oluşturma

Kendi özel npx scriptlerinizi oluşturarak, tekrar eden görevleri daha etkili bir şekilde yönetebilirsiniz. Bu, projenizin belirli senaryolarını hızlıca çalıştırmanıza olanak tanır.

Projenizde `scripts` bölümünde özel bir komut tanımlayın;

```js
"scripts": {
  "start-dev": "npm run server && npm run client"
}
```

Bu komutu npx ile çalıştırın;

```js
npx start-dev
```

Bu şekilde, projenizde **belirli senaryoları** basit ve kısa komutlarla çalıştırabilirsiniz.

--

## Özetle

Mini serinin ikinci ve son yazısında, npm paket yöneticisinin gelişmiş kullanımını kapsamlı bir şekilde ele almaya çalıştım. Temel kavramlardan başlayarak, paket versiyonlama stratejilerine, güvenlik yönetimine ve npx gibi gelişmiş senaryolara kadar birçok konuya değindim. Bu bilgilerin, bir geliştirici olarak projelerinizde daha etkili ve verimli olmanıza yardımcı olacağını umuyorum.

Bir projeyi yönetirken **doğru paket yönetimi, sürüm kontrolü** ve **güvenlik önlemleri** almak, projenizin **kalitesini** ve **sürdürülebilirliğini** artırır. İyi bir paket yönetimi pratiği, projenizin başarısı için hayati öneme sahiptir.

## Kaynaklar:

- [npm Resmi Dokümantasyon](https://docs.npmjs.com/)
- [Yarn Resmi Dokümantasyon](https://classic.yarnpkg.com/en/docs)
- [pnpm Resmi Dokümantasyon](https://pnpm.io/motivation)
- [npm Package.json Referansı](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [Semantic Versioning](https://semver.org/)
- [freecodecamp.org Tutorial](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)

> İçeriklerimin, kişisel bakış açımı yansıttığını düşünürsek, her zaman gözden kaçırabileceğim, eksik veya hatalı yerler olabilir. Bu nedenle, görüşlerinizi, geri bildirimlerinizi ve sorularınızı yorumlarınızla veya doğrudan [bana ulaşarak](mailto:aaltankurt@gmail.com) paylaşmaktan çekinmeyin.
>
> Son olarak, yazılarıma [kahve ısmarlayarak](https://www.buymeacoffee.com/altankurt/) destek verebilirsiniz. ️🙌
>
> Yeni bir yazıda görüşmek üzere✌️
