// Các khối giao diện Lanest dùng chung (biểu tượng SVG + sứ mệnh, tầm nhìn, 6 giá trị).
// Nội dung lấy nguyên văn từ tài liệu gốc (wiki/thuc-the/cong-ty-yen-sao-lanest.md, wiki/khai-niem/gia-tri-cot-loi.md) — không tự sửa.
var LN_IMG = 'https://lagroup79.github.io/kho-lanest/';
var LN_SVG = (function(){
  var s = function(p, fill){ return '<svg viewBox="0 0 24 24" fill="' + (fill ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; };
  return {
    bird: s('<path d="M1.5 7.5c3.8.3 6.8 2 8.9 5 1.2-3.9 4.4-6.7 9.9-8-3.4 2.3-5.4 5.1-6 8.5l4.2 4.6-4.9-1.7-1.3 3.6-1.4-3.9C8.6 12.3 5.6 9.6 1.5 7.5z" stroke="none"/>', true),
    kho: s('<path d="M3 10.5 12 4l9 6.5V20H3z"/><path d="M7 20v-6h10v6M7 17h10"/>'),
    clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    lock: s('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    user: s('<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-5 8-5s6.5 1 8 5"/>'),
    sumenh: s('<path d="M3 20l6-9 4 5 3-4 5 8z"/><path d="M12 13V4l5 2-5 2"/>'),
    tamnhin: s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'),
    tantam: s('<path d="M12 11s-4-2.5-4-5a2.2 2.2 0 0 1 4-1.2A2.2 2.2 0 0 1 16 6c0 2.5-4 5-4 5z"/><path d="M3 16h4l3 2h5l5-3"/>'),
    chatluong: s('<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l3 16 3-16"/>'),
    uytin: s('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
    trachnhiem: s('<circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.5"/><path d="M3 19c.8-3 3.3-4.5 6-4.5s5.2 1.5 6 4.5M15.5 15c2.5 0 4.3 1.3 5.3 4"/>'),
    phattrien: s('<path d="M4 20h16M7 17v-4M11 17v-7M15 17v-5M19 17V7"/><path d="M5 10l5-4 3 2 6-5"/>'),
    hieuqua: s('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>')
  };
})();
function lnDiv(){ return '<div class="ln-div"><i></i>' + LN_SVG.bird + '<i></i></div>'; }
function lnBrand(){
  var v = [['tantam','TẬN TÂM'],['chatluong','CHẤT LƯỢNG'],['uytin','UY TÍN'],['trachnhiem','TRÁCH NHIỆM'],['phattrien','PHÁT TRIỂN'],['hieuqua','HIỆU QUẢ']];
  return '<section class="ln-mv">' +
    '<div><h3><span class="ic">' + LN_SVG.sumenh + '</span>SỨ MỆNH</h3><p>Lanest lan toả tinh hoa yến sào Việt, minh bạch từ nguồn gốc, chân thật từ giá trị, vì sức khoẻ cộng đồng.</p></div>' +
    '<div><h3><span class="ic">' + LN_SVG.tamnhin + '</span>TẦM NHÌN</h3><p>Lanest trở thành thương hiệu yến sào uy tín hàng đầu Việt Nam, từng bước vươn tầm quốc tế.</p></div>' +
    '</section><section class="ln-vals"><h3><i></i>6 GIÁ TRỊ CỐT LÕI<i></i></h3><ul>' +
    v.map(function(x){ return '<li><span class="ic">' + LN_SVG[x[0]] + '</span>' + x[1] + '</li>'; }).join('') +
    '</ul></section><img class="ln-foot" src="' + LN_IMG + 'footer.jpg" alt="">';
}
