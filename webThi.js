
document.getElementById("js_mo_form_thanh_tich").onclick = function() {hien_form_thanh_tich()};
function hien_form_thanh_tich() {
    document.getElementById("form_thanh_tich").style.display = "block";
  }


document.getElementById("js_mo_form_kinh_nghiem").onclick = function() {hien_form_kinh_nghiem()};
function hien_form_kinh_nghiem() {
    document.getElementById("form_kinh_nghiem").style.display = "block";
  }

document.getElementById("js_mo_form_gioi_thieu").onclick = function() {hien_form_gioi_thieu()};
function hien_form_gioi_thieu() {
    document.getElementById("form_gioi_thieu").style.display = "block";
  }

document.getElementById("js_mo_form_ki_nang").onclick = function() {hien_form_ki_nang()};
function hien_form_ki_nang() {
    document.getElementById("form_ki_nang").style.display = "block";
  }

document.getElementById("js_mo_form_ngoai_ngu").onclick = function() {hien_form_ngoai_ngu()};
function hien_form_ngoai_ngu() {
    document.getElementById("form_ngoai_ngu").style.display = "block";
  }

document.getElementById("js_mo_form_hoc_van").onclick = function() {hien_form_hoc_van()};
function hien_form_hoc_van() {
    document.getElementById("form_hoc_van").style.display = "block";
  }

document.getElementById("js_mo_form_thong_tin_ca_nhan").onclick = function() {hien_form_thong_tin_ca_nhan()};
function hien_form_thong_tin_ca_nhan() {
    document.getElementById("form_thong_tin_ca_nhan").style.display = "block";
  }


// ------------------------------------------------------------------------------------------------

document.getElementById("js_thoat_form_mini_kinh_nghiem").onclick = function() {an_form_kinh_nghiem()};
function an_form_kinh_nghiem() {
    document.getElementById("form_kinh_nghiem").style.display = "none";
  }


document.getElementById("js_thoat_form_mini_thanh_tich").onclick = function() {an_form_thanh_tich()};
function an_form_thanh_tich() {
    document.getElementById("form_thanh_tich").style.display = "none";
  }

document.getElementById("js_thoat_form_mini_gioi_thieu").onclick = function() {an_form_gioi_thieu()};
function an_form_gioi_thieu() {
    document.getElementById("form_gioi_thieu").style.display = "none";
  }

document.getElementById("js_thoat_form_mini_ki_nang").onclick = function() {an_form_ki_nang()};
function an_form_ki_nang() {
    document.getElementById("form_ki_nang").style.display = "none";
  }

document.getElementById("js_thoat_form_mini_ngoai_ngu").onclick = function() {an_form_ngoai_ngu()};
function an_form_ngoai_ngu() {
    document.getElementById("form_ngoai_ngu").style.display = "none";
  }

document.getElementById("js_thoat_form_mini_hoc_van").onclick = function() {an_form_hoc_van()};
function an_form_hoc_van() {
    document.getElementById("form_hoc_van").style.display = "none";
  }

document.getElementById("js_thoat_form_mini_thong_tin_ca_nhan").onclick = function() {an_form_thong_tin_ca_nhan()};
function an_form_thong_tin_ca_nhan() {
    document.getElementById("form_thong_tin_ca_nhan").style.display = "none";
  }

// ------------------------------------------------------------

function js_them_vao_gioi_thieu() {
    var noi_dung_gioi_thieu = document.getElementById("value_gioi_thieu").value;
    document.getElementById("place_gioi_thieu").appendChild(document.createElement("P"));
    document.querySelector("#place_gioi_thieu > p:last-child").innerHTML = '<br>&#160&#160&#160&#160&#160&#160'+'<span style="font-size: 17px">' + noi_dung_gioi_thieu + '</span>';
    document.getElementById("form_gioi_thieu").style.display = "none";
}

function js_them_vao_thong_tin_ca_nhan() {
    var noi_dung_ho_ten = document.getElementById("value_ho_ten").value;
    var noi_dung_nghe_nghiep = document.getElementById("value_nghe_nghiep").value;
    var noi_dung_so_dien_thoai = document.getElementById("value_so_dien_thoai").value;
    var noi_dung_email = document.getElementById("value_email").value;
    var noi_dung_dia_chi = document.getElementById("value_dia_chi").value;

    document.getElementById("place_ho_ten").innerHTML = "";
    document.getElementById("place_ho_ten").appendChild(document.createElement("P"));
    document.querySelector("#place_ho_ten > p:last-child").innerHTML = noi_dung_ho_ten;

    document.getElementById("place_nghe_nghiep").innerHTML = "";
    document.getElementById("place_nghe_nghiep").appendChild(document.createElement("P"));
    document.querySelector("#place_nghe_nghiep > p:last-child").innerHTML = noi_dung_nghe_nghiep;

    document.getElementById("place_so_dien_thoai").innerHTML = "";
    document.getElementById("place_so_dien_thoai").appendChild(document.createElement("P"));
    document.querySelector("#place_so_dien_thoai > p:last-child").innerHTML = noi_dung_so_dien_thoai;

    document.getElementById("place_email").innerHTML = "";
    document.getElementById("place_email").appendChild(document.createElement("P"));
    document.querySelector("#place_email > p:last-child").innerHTML = noi_dung_email;

    document.getElementById("place_dia_chi").innerHTML = "";
    document.getElementById("place_dia_chi").appendChild(document.createElement("P"));
    document.querySelector("#place_dia_chi > p:last-child").innerHTML = noi_dung_dia_chi;

    document.getElementById("form_thong_tin_ca_nhan").style.display = "none";
}


function js_them_vao_ki_nang(){
    var noi_dung_ten_ki_nang_1 = document.getElementById("value_ten_ky_nang_1").value;
    var noi_dung_kha_nang_1 = document.getElementById("value_kha_nang_1").value;
    var noi_dung_ten_ki_nang_2 = document.getElementById("value_ten_ky_nang_2").value;
    var noi_dung_kha_nang_2 = document.getElementById("value_kha_nang_2").value;
    var noi_dung_ten_ki_nang_3 = document.getElementById("value_ten_ky_nang_3").value;
    var noi_dung_kha_nang_3 = document.getElementById("value_kha_nang_3").value;
    

    document.getElementById("place_ten_skill_1").innerHTML = "";
    document.getElementById("place_progresbar_1").innerHTML = "";
    document.getElementById("place_ten_skill_2").innerHTML = "";
    document.getElementById("place_progresbar_2").innerHTML = "";
    document.getElementById("place_ten_skill_3").innerHTML = "";
    document.getElementById("place_progresbar_3").innerHTML = "";

    document.getElementById("place_ten_skill_1").innerHTML = noi_dung_ten_ki_nang_1;
    document.getElementById("place_progresbar_1").innerHTML = '<div class="w3-grey" style="height:24px;width:' + noi_dung_kha_nang_1 + '%">' + "</div>";

    document.getElementById("place_ten_skill_2").innerHTML = noi_dung_ten_ki_nang_2;
    document.getElementById("place_progresbar_2").innerHTML = '<div class="w3-grey" style="height:24px;width:' + noi_dung_kha_nang_2 + '%">' + "</div>";
    
    document.getElementById("place_ten_skill_3").innerHTML = noi_dung_ten_ki_nang_3;
    document.getElementById("place_progresbar_3").innerHTML = '<div class="w3-grey" style="height:24px;width:' + noi_dung_kha_nang_3 + '%">' + "</div>";

}


function js_them_vao_ngoai_ngu(){
    var noi_dung_ten_chung_chi = document.getElementById("value_ten_chung_chi").value;
    var noi_dung_grand = document.getElementById("value_grand").value;

    document.getElementById("place_ngoai_ngu").appendChild(document.createElement("P"));
    document.querySelector("#place_ngoai_ngu > p:last-child").innerHTML = "<h5><b>•Tên chứng chỉ: " + noi_dung_ten_chung_chi + "</b></h5>Điểm " + noi_dung_grand;

    document.getElementById("form_ngoai_ngu").style.display = "none";
}


function js_them_vao_hoc_van(){
    var noi_dung_truong = document.getElementById("value_truong").value;
    var noi_dung_nganh = document.getElementById("value_nganh").value;
    var noi_dung_loai_bang = document.getElementById("value_loai_bang").value;
    var noi_dung_ngay_bat_dau_hoc = document.getElementById("value_nam_bat_dau_hoc").value;
    var noi_dung_ngay_tot_nghiep = document.getElementById("value_nam_tot_nghiep").value;

    document.getElementById("place_thoi_gian_hoc").appendChild(document.createElement("P"));
    document.querySelector("#place_thoi_gian_hoc > p:last-child").innerHTML = noi_dung_ngay_bat_dau_hoc + ' - ' + noi_dung_ngay_tot_nghiep + '<br><br><br><br><hr color = "#BFBEBE">';

    document.getElementById("place_truong").appendChild(document.createElement("P"));
    document.querySelector("#place_truong > p:last-child").innerHTML = noi_dung_truong + '<br>' + 'Chuyên ngành: ' + noi_dung_nganh + '<br>' + 'Bằng: ' + noi_dung_loai_bang + '<br><br><hr color = "#BFBEBE">';

    document.getElementById("form_hoc_van").style.display = "none";            
}

function js_them_vao_kinh_nghiem(){
    var noi_dung_ten_cong_ty = document.getElementById("value_cong_ty").value;
    var noi_dung_vi_tri = document.getElementById("value_vi_tri").value;
    var noi_dung_mo_ta = document.getElementById("value_mo_ta_cong_viec").value;
    var noi_dung_ngay_bat_dau_lam = document.getElementById("value_nam_bat_dau_lam").value;
    var noi_dung_ngay_nghi_lam = document.getElementById("value_nam_nghi_lam").value;
    
    document.getElementById("place_ten_cong_ty_thoi_gian").appendChild(document.createElement("P"));
    document.querySelector("#place_ten_cong_ty_thoi_gian > p:last-child").innerHTML = '<span style="font-size: 17px">' + '&#160&#160•' + noi_dung_ten_cong_ty + '</span><br>&#160&#160&#160&#160&#160&#160 ' + noi_dung_ngay_bat_dau_lam + '-' + noi_dung_ngay_nghi_lam + '<br><hr>';

    document.getElementById("place_vi_tri_mo_ta").appendChild(document.createElement("P"));
    document.querySelector("#place_vi_tri_mo_ta > p:last-child").innerHTML = '<span style="font-size: 17px">' + noi_dung_vi_tri + '</span><br>' + noi_dung_mo_ta + '<br><hr>';

    document.getElementById("form_kinh_nghiem").style.display = "none";
              
}


function js_them_vao_thanh_tich(){
    var noi_dung_ten_thanh_tich = document.getElementById("value_ten_thanh_tich").value;
    var noi_dung_giai_thuong = document.getElementById("value_giai").value;
    var noi_dung_ngay_trao_giai = document.getElementById("value_ngay_trao_giai").value;
    
    document.getElementById("place_thoi_gian_thanh_tich").appendChild(document.createElement("P"));
    document.querySelector("#place_thoi_gian_thanh_tich > p:last-child").innerHTML = '<p style="font-size: 17px">' + '&#160&#160•' +  noi_dung_ngay_trao_giai + '</p>' + '<br><br><hr>';

    document.getElementById("place_ten_thanh_tich").appendChild(document.createElement("P"));
    document.querySelector("#place_ten_thanh_tich > p:last-child").innerHTML = '<p style="font-size: 17px">' + noi_dung_ten_thanh_tich + '</p><br>' + '<p style="font-size: 13px">' + noi_dung_giai_thuong + '</p><hr>';
    document.getElementById("form_kinh_nghiem").style.display = "none";
              
}


// ------------------------------------------------------------
(() => {

    const downloadPDFElement = document.getElementById("js-download-pdf");

    downloadPDFElement.addEventListener("click", (event) => {
        const doc = new jspdf.jsPDF({
            format: "a4",
            orientation: "portrait",
            unit: "mm"
        });

        html2canvas(document.getElementById("main")).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgProps= doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save(`CV-${new Date().toLocaleDateString("vi-VN")}.pdf`);
        })
    })

})();

// ---------------------------------
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}
