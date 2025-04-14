---
title: 'npm — Node Package Manager'
date: '2023-08-08'
author: 'Altan Kurt'
excerpt: 'Web geliştirme dünyasında, projelerinizi daha verimli bir şekilde yönetmenizi sağlayan araçlar var. İşte bu araçlardan biri de npm’dir.'
lang: 'tr'
cover: 'cover.jpeg'
---

> Bir geliştirici olarak, deneyimlerimi ve gözlemlerimi paylaşmayı ve böylece hem kendime bir arşiv oluşturmayı hem de merak edenlerin faydalanabileceği içerikler üretmeyi amaçlıyorum. Teknik konuların yanı sıra, çalışma hayatımızı etkileyen sosyal konularda da yazmak niyetindeyim.

Bu kısa seride **npm**’in temel taşlarından başlayarak ileri seviye kullanımından bahsetmeye çalışacağım.

## npm Nedir ve Temel Kavramlar

Web geliştirme dünyasında, projelerinizi daha verimli bir şekilde yönetmenizi sağlayan araçlar var. İşte bu araçlardan biri de **npm**’dir.

**npm (Node Package Manager)**, **Node.js** tabanlı bir **paket yöneticisi** olarak, paketleri bulma, paylaşma ve yönetme sürecini büyük ölçüde kolaylaştırır. Web geliştiricilerin çokça tercih ettiği bir araçtır.

### npm Nedir?

npm, projelerinizde kullanmak üzere hazır paketleri (modülleri) bulabileceğiniz ve projelerinizi başkalarıyla paylaşabileceğiniz açık kaynaklı bir platformdur. Bu paketler, önceden yazılmış kod parçalarını içerir ve geliştirme sürecinizi hızlandırmak amacıyla kullanılabilir. Örneğin, CSS çerçeveleri, JavaScript kütüphaneleri ve diğer kod parçaları, npm aracılığıyla projenize eklenerek tekrar tekrar yazma ihtiyacını ortadan kaldırır.

> **“Take your JavaScript development up a notch”**
>
> — npmjs.org

## Temel Kavramlar

### 1. Paketler ve Modüller: Kodunuzun Yapı Taşları

Paketler, projenizin farklı bileşenlerini veya işlevlerini içeren hazır kod parçalarıdır. Örneğin, web sayfanızda kullanmak üzere hazır bir renk paleti veya bir animasyon kütüphanesi gibi. Her paket, birden fazla modülden oluşabilir ve projenizde farklı alanlarda kullanılabilecek fonksiyonları içerebilir.

Örnek olarak, projenizde kullanabileceğiniz popüler bir CSS çerçevesi olan **Bootstrap** veya bir veri manipülasyon kütüphanesi olan **Lodash**’i düşünebilirsiniz.

### 2. Bağımlılıklar ve package.json: Projenizi İnşa Ederken

npm, paketleri yüklerken otomatik olarak gereksinim duyduğunuz diğer paketleri de yükler. Bu ilişkilere “**bağımlılık**” denir. Bu, projenizin sorunsuz bir şekilde çalışmasını sağlamak için oldukça önemlidir. Bu ilişkileri belirtmek için package.json dosyası kullanılır. Bu dosya, projenizin bağımlılıklarını ve diğer önemli ayarları içerir. Aynı zamanda projenizin belgesi olarak da düşünülebilir.

Örneğin, bir web projesi geliştiriyorsunuz ve projenizde **jQuery** ve **Bootstrap** gibi popüler kütüphaneleri kullanmanız gerekiyor. Bu kütüphaneler, projenizin bağımlılıklarıdır ve npm ile bu bağımlılıkları yönetebilirsiniz.

```js
{
  "name": "ornek-proje",
  "version": "1.0.0",
  "description": "Bir örnek web projesi",
  "main": "index.js",
  "dependencies": {
    "jquery": "^3.6.0",
    "bootstrap": "^5.0.0"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "babel": "^7.15.0"
  },
  "scripts": {
    "start": "node index.js",
    "lint": "eslint ."
  },
  "author": "Adınız Soyadınız",
  "license": "MIT"
}
```

Yukarıdaki örnekte, “**dependencies**” alanı altında projenin temel bağımlılıkları olan **jQuery** ve **Bootstrap** tanımlanmıştır. Bu paketler, projeyi çalıştırmak için gereklidir. Aynı zamanda, “**devDependencies**” alanı altında geliştirme aşamasında kullanılan paketler de tanımlanmıştır. “**scripts**” alanı ise özel komutları tanımlamak için kullanılır. Örneğin, “**start**” komutu ile projeyi başlatabilir veya “**lint**” komutu ile kod kalitesi denetimi yapabilirsiniz.

Bu şekilde `package.json` dosyası, projenizin gerekli bağımlılıklarını ve yapılandırmasını tanımlamak için kullanılır. Böylece projeyi farklı sistemlerde veya geliştiriciler arasında kolayca çalıştırabilir ve tutarlı bir şekilde yönetebilirsiniz.

### 3. npm Komutları: Temel Kullanım

npm’i etkili bir şekilde kullanabilmek için temel komutları bilmek oldukça önemlidir. Yaygın kullanılan bazı npm komutları:

- `npm install`: Paketleri yüklemek için kullanılır.
  Örneğin, `npm install bootstrap` komutu ile Bootstrap’i projenize ekleyebilirsiniz.
- `npm update`: Paketleri güncellemek için kullanılır.
  Örneğin, `npm update react` komutu ile React kütüphanesini güncelleyebilirsiniz.
- `npm uninstall`: Paketleri kaldırmak için kullanılır.
  Örnek olarak, `npm uninstall bootstrap` komutu ile Bootstrap kütüphanesini projenizden kaldırabilirsiniz.
- `npm init`: Yeni bir proje oluştururken `package.json` dosyasını oluşturmak için kullanılır. Komutu çalıştırdığınızda projeniz hakkında sorular sorularak temel yapılandırmaları belirlemeniz sağlanır.

![laptop](laptop.jpg)

### Bir npm Paketini Projenize Ekleme

Örneğin, bir web projesi geliştiriyorsunuz ve projenize kullanıcı arayüzü bileşenlerini eklemek istiyorsunuz.

**1. Node.js ve npm’i İndirme:**

İlk adım olarak, Node.js resmi web sitesinden indirmeniz gerekmektedir. İşte bu adımı nasıl gerçekleştireceğiniz:

- Web tarayıcınızı açın ve Resmi **[Node.js](https://nodejs.org/)** web sitesine gidin.
- Ana sayfada, “**Latest LTS**” (En Son Uzun Süreli Desteklenen Sürüm) sekmesine tıklayın. Bu sürüm, stabil ve uzun süre desteklenen bir sürümdür.
- İşletim sisteminize uygun olan sürümü seçin ve indirin (örneğin, Windows için “Windows Installer” veya macOS için “macOS Installer”).

**2. Node.js ve npm’i Kurma**

İndirilen kurulum dosyasını çalıştırarak Node.js ve npm’i bilgisayarınıza kurabilirsiniz. İşte bu adımı nasıl gerçekleştireceğiniz:

- İndirilen kurulum dosyasını çift tıklayarak çalıştırın.
- Kurulum sihirbazını takip edin ve gerekli adımları tamamlayın.
- Kurulum sırasında, “**npm package manager**” seçeneğinin işaretli olduğundan emin olun. Bu seçenek, npm’in Node.js ile birlikte yüklenmesini sağlar.
- Kurulum tamamlandığında, “Finish” veya “Tamam” düğmesine tıklayarak kurulumu bitirin.

**3. Kurulumun Doğrulaması:**

Node.js ve npm’i doğru bir şekilde kurduğunuzu doğrulamak için terminali açın ve aşağıdaki komutları kullanın:

```js
node - v //Node.js sürümünü kontrol etmek için
npm - v //npm sürümünü kontrol etmek için
```

Bu komutlar sırasıyla Node.js ve npm sürüm numaralarını göstermelidir. Artık Node.js ve npm’i başarıyla kurmuş oldunuz.

**4. Projeye Paket Ekleme**

- Proje dizinine gidin ve `npm init` komutunu kullanarak `package.json` dosyasını oluşturun.
- `npm install bootstrap` komutunu kullanarak Bootstrap paketini projenize ekleyin.
- HTML dosyanızda Bootstrap’in stillerini kullanmak için gerekli bağlantıları ekleyin. Örneğin:

```js
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

Ardından, Bootstrap bileşenlerini projenizde kullanabilirsiniz.

## Özetle

Bu yazıda, npm’in **temel kavramlarını** ele aldık. Paketlerin ve modüllerin nasıl çalıştığını, bağımlılıkların nasıl yönetildiğini ve `package.json` dosyasının önemini vurgulamaya çalıştım. Umarım yazı sizin için faydalı ve ilgi çekici olmuştur.

İkinci yazımda, daha fazla ayrıntıya inerek **npm paket yönetimi** ve **gelişmiş kullanımından** bahsetmeye çalışacağım.

## Kaynaklar:

- [npm Documentation](https://docs.npmjs.com/)
- [An introduction to the NPM package manager](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [GitHub npm](https://github.com/npm)
- [Introducing npm package provenance — The GitHub Blog](https://github.blog/2023-04-19-introducing-npm-package-provenance/)

> İçeriklerimin, kişisel bakış açımı yansıttığını düşünürsek, her zaman gözden kaçırabileceğim, eksik veya hatalı yerler olabilir. Bu nedenle, görüşlerinizi, geri bildirimlerinizi ve sorularınızı yorumlarınızla veya doğrudan [bana ulaşarak](mailto:aaltankurt@gmail.com) paylaşmaktan çekinmeyin.
>
> Son olarak, yazılarıma [kahve ısmarlayarak](https://www.buymeacoffee.com/altankurt/) destek verebilirsiniz.🙌
>
> Yeni bir yazıda görüşmek üzere✌️
