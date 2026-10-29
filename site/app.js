/* Offtake Partners — language toggle (EN / VI) */
(function () {
  'use strict';

  var STORAGE_KEY = 'offtake-lang';

  var T = {
    en: {
      'title': 'Offtake Partners · Capital that follows contracts.',
      'description': "Capital that follows contracts. We invest in Vietnam's construction-materials supply chain, and only where the output is already sold.",
      'skip': 'Skip to content',
      'lang.label': 'Language',
      'nav.why': 'Why offtake',
      'nav.how': 'How we invest',
      'nav.sectors': 'Sectors',
      'nav.team': 'Team',
      'nav.contact': 'Contact',
      'hero.tagline': 'Capital that follows contracts.',
      'hero.sub': "We invest in Vietnam's construction-materials supply chain, and only where the output is already sold.",
      'why.h': 'Why offtake',
      'why.1': 'Vietnam is in the largest build-out in its history: expressways, airports, the North–South railway and a million social-housing units before 2030. Every kilometre and every unit is made of stone, aggregates, brick and concrete, and leaves behind construction waste that someone has to process.',
      'why.2': 'The businesses that supply these materials are mostly family-owned, fragmented and under-capitalised. They have demand on their doorstep and no structured way to finance the plant, the licences and the governance that demand requires.',
      'why.3': 'An offtake agreement changes that. When the buyer is contracted before the plant is built, the investment is anchored to a committed revenue stream rather than to a forecast. That is the only kind of investment we make. We do not invest ahead of demand. We invest behind a signed contract.',
      'how.h': 'How we invest',
      'how.1': 'Offtake first, capital second. Every investment starts with a contracted buyer. No contract, no capital.',
      'how.2': 'Diligence before price. Weeks on site, with the buyers and the books, before any discussion of valuation.',
      'how.3': 'Licences complete; reserves and capacity independently assessed. We do not price what we cannot verify.',
      'how.4': 'Operators, not spectators. Our team has run plants and quarries. We sit beside management, not above it.',
      'how.5': 'Structured for scrutiny. Singapore vehicles, independent audit and international anti-corruption standards, so that partners and lenders can look at everything.',
      'process.h': 'From contract to plant',
      'process.1': 'Contract. Find a buyer with a funded programme: an expressway package, a public developer, a housing scheme. Secure the offtake.',
      'process.2': 'Diligence. Verify the supplier: licences, reserves, equipment, books, people.',
      'process.3': 'Capital. Structure the investment against the contract, alongside a lender where one is needed.',
      'process.4': 'Operate. Deliver on the contract, hold the standards, and build the next one.',
      'sectors.h': 'Where contracted demand exists',
      'sectors.1': 'Construction-waste recycling',
      'sectors.1.note': 'Demand set by disposal rules and by contractors who need recycled aggregate.',
      'sectors.2': 'Stone and aggregates for infrastructure',
      'sectors.2.note': 'Demand set by expressway, rail and airport packages.',
      'sectors.3': 'New materials for social housing',
      'sectors.3.note': 'Demand set by the national housing programme.',
      'team.h': 'Team',
      'team.1.name': 'Mike Doan',
      'team.1.role': 'Founder and CFO',
      'team.1.bio': 'Former Google tech lead; has built and run companies in Vietnam and the United States.',
      'team.2.name': 'Leon Do',
      'team.2.role': 'Offtake and operating partner',
      'team.2.bio': 'Brings an extensive network of relationships across Vietnam, which underpins our contract sourcing and on-the-ground work.',
      'contact.h': 'Contact',
      'contact.p': 'We work with construction-materials business owners who have demand and need a partner to meet it, and with qualified investors we already know.',
      'contact.label': 'Contact:',
      'contact.email': '[● email]',
      'footer.a': 'Offtake Partners is a trading name of VN Materials Partners Pte. Ltd., Singapore, UEN',
      'footer.b': '. This site provides information about the company only and is not an offer to sell, or a solicitation of an offer to buy, securities in any jurisdiction.'
    },
    vi: {
      'title': 'Offtake Partners · Vốn đi theo hợp đồng.',
      'description': 'Vốn đi theo hợp đồng. Chúng tôi đầu tư vào chuỗi cung ứng vật liệu xây dựng của Việt Nam, và chỉ khi đầu ra đã được bao tiêu.',
      'skip': 'Bỏ qua đến nội dung',
      'lang.label': 'Ngôn ngữ',
      'nav.why': 'Vì sao bao tiêu',
      'nav.how': 'Cách chúng tôi đầu tư',
      'nav.sectors': 'Lĩnh vực',
      'nav.team': 'Đội ngũ',
      'nav.contact': 'Liên hệ',
      'hero.tagline': 'Vốn đi theo hợp đồng.',
      'hero.sub': 'Chúng tôi đầu tư vào chuỗi cung ứng vật liệu xây dựng của Việt Nam, và chỉ khi đầu ra đã được bao tiêu.',
      'why.h': 'Vì sao bao tiêu',
      'why.1': 'Việt Nam đang trong giai đoạn xây dựng lớn nhất lịch sử: đường cao tốc, sân bay, đường sắt Bắc–Nam và một triệu căn nhà ở xã hội trước năm 2030. Mỗi kilômét đường và mỗi căn nhà đều được làm từ đá, cốt liệu, gạch và bê tông, và để lại phế thải xây dựng mà ai đó phải xử lý.',
      'why.2': 'Các doanh nghiệp cung cấp những vật liệu này phần lớn là doanh nghiệp gia đình, phân tán và thiếu vốn. Họ có nhu cầu ngay trước cửa nhưng không có cách bài bản để tài trợ cho nhà máy, giấy phép và bộ máy quản trị mà nhu cầu đó đòi hỏi.',
      'why.3': 'Hợp đồng bao tiêu thay đổi điều đó. Khi người mua đã ký trước khi nhà máy được xây, khoản đầu tư được neo vào dòng doanh thu đã cam kết thay vì vào dự báo. Đó là loại đầu tư duy nhất chúng tôi thực hiện. Chúng tôi không đầu tư đón đầu nhu cầu. Chúng tôi đầu tư sau khi hợp đồng đã ký.',
      'how.h': 'Cách chúng tôi đầu tư',
      'how.1': 'Đầu ra trước, vốn sau. Mọi khoản đầu tư bắt đầu từ một người mua đã ký hợp đồng. Không có hợp đồng, không có vốn.',
      'how.2': 'Thẩm định trước, định giá sau. Nhiều tuần đi thực địa, gặp người mua và kiểm tra sổ sách trước khi bàn đến giá.',
      'how.3': 'Giấy phép đầy đủ; trữ lượng và công suất được thẩm định độc lập. Chúng tôi không định giá những gì không thể kiểm chứng.',
      'how.4': 'Người vận hành, không phải người đứng xem. Đội ngũ của chúng tôi đã từng điều hành nhà máy và mỏ. Chúng tôi ngồi cạnh ban điều hành, không đứng trên họ.',
      'how.5': 'Cấu trúc để được soi xét. Công ty đầu tư tại Singapore, kiểm toán độc lập và chuẩn chống tham nhũng quốc tế, để đối tác và bên cho vay có thể xem xét mọi thứ.',
      'process.h': 'Từ hợp đồng đến nhà máy',
      'process.1': 'Hợp đồng. Tìm người mua có chương trình đã được cấp vốn: một gói thầu cao tốc, một chủ đầu tư công, một dự án nhà ở. Chốt hợp đồng bao tiêu.',
      'process.2': 'Thẩm định. Kiểm chứng nhà cung cấp: giấy phép, trữ lượng, thiết bị, sổ sách, con người.',
      'process.3': 'Vốn. Cấu trúc khoản đầu tư dựa trên hợp đồng, cùng với ngân hàng khi cần.',
      'process.4': 'Vận hành. Thực hiện hợp đồng, giữ vững tiêu chuẩn, và xây dựng hợp đồng tiếp theo.',
      'sectors.h': 'Nơi đã có nhu cầu theo hợp đồng',
      'sectors.1': 'Tái chế phế thải xây dựng',
      'sectors.1.note': 'Nhu cầu đến từ quy định về xử lý phế thải và từ các nhà thầu cần cốt liệu tái chế.',
      'sectors.2': 'Đá và cốt liệu phục vụ hạ tầng',
      'sectors.2.note': 'Nhu cầu đến từ các gói thầu cao tốc, đường sắt và sân bay.',
      'sectors.3': 'Vật liệu mới cho nhà ở xã hội',
      'sectors.3.note': 'Nhu cầu đến từ chương trình nhà ở xã hội quốc gia.',
      'team.h': 'Đội ngũ',
      'team.1.name': 'Mike Doan',
      'team.1.role': 'Sáng lập và Giám đốc tài chính',
      'team.1.bio': 'Cựu tech lead tại Google; đã xây dựng và điều hành doanh nghiệp tại Việt Nam và Hoa Kỳ.',
      'team.2.name': 'Leon Do',
      'team.2.role': 'Đối tác bao tiêu và vận hành',
      'team.2.bio': 'Có mạng lưới quan hệ rộng khắp Việt Nam, làm nền tảng cho việc tìm kiếm hợp đồng và công tác thực địa của chúng tôi.',
      'contact.h': 'Liên hệ',
      'contact.p': 'Chúng tôi làm việc với các chủ doanh nghiệp vật liệu xây dựng đã có nhu cầu và cần một đối tác để đáp ứng nhu cầu đó, và với các nhà đầu tư đủ điều kiện mà chúng tôi đã có quan hệ.',
      'contact.label': 'Liên hệ:',
      'contact.email': '[● email]',
      'footer.a': 'Offtake Partners là tên thương mại của VN Materials Partners Pte. Ltd., Singapore, UEN',
      'footer.b': '. Trang này chỉ cung cấp thông tin về công ty và không phải lời chào mời mua chứng khoán tại bất kỳ quốc gia nào.'
    }
  };

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  function fromQuery() {
    var m = /[?&]lang=(en|vi)\b/.exec(location.search);
    return m ? m[1] : null;
  }

  // The host redirects visitors by country: /vi for Vietnam, / for everyone
  // else (see _redirects, functions/_middleware.js and vi.html). On hosts
  // that rewrite /vi to this page the hint is in the path; on GitHub Pages
  // vi.html records it in storage and sends the visitor back here.
  function fromPath() {
    var m = /\/(en|vi)\/?$/.exec(location.pathname);
    if (m) return m[1];
    try {
      var g = localStorage.getItem('offtake-geo');
      if (g === 'en' || g === 'vi') return g;
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  function fromBrowser() {
    var langs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      if (/^vi\b/i.test(langs[i])) return 'vi';
    }
    return 'en';
  }

  // Priority: ?lang= in the URL, then a choice saved from the toggle,
  // then the host's country hint, then the browser language.
  function initialLang() {
    var q = fromQuery();
    if (q) return q;
    var s = readStored();
    if (s === 'en' || s === 'vi') return s;
    var p = fromPath();
    if (p) return p;
    return fromBrowser();
  }

  function setLang(lang) {
    var dict = T[lang] || T.en;

    document.documentElement.lang = lang;
    document.title = dict.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.description);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }

    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var spec = attrNodes[j].getAttribute('data-i18n-attr').split(':');
      if (spec.length === 2 && dict[spec[1]] !== undefined) {
        attrNodes[j].setAttribute(spec[0], dict[spec[1]]);
      }
    }

    var buttons = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < buttons.length; k++) {
      var on = buttons[k].getAttribute('data-lang') === lang;
      buttons[k].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  var langGroup = document.querySelector('.lang');
  if (langGroup) {
    langGroup.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.lang-btn');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      setLang(lang);
      store(lang);
    });
  }

  setLang(initialLang());
})();
