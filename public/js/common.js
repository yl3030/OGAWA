$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".nav-main").slideToggle(500);
})

$(".fixed-btn_link").click(function(){
    let target = $(this).data("target");
    let target_top = $(target).offset().top;
    $("html,body").animate({ scrollTop:target_top },300);
})

// 選項
$(document).on("click",".select_item",function(){
    if($(this).parents(".select").hasClass("multiple")){
        $(this).toggleClass("active");
    }else if($(this).parents(".select").hasClass("select-technician")){
        $(this).parents(".select").find(".select_item").removeClass("active");
        $(this).addClass("active");
    }else {
        if(!$(this).hasClass("customize")){
            $(this).toggleClass("active").siblings(".select_item").removeClass("active");
        }
    }
    
})
$(".check").click(function(){
    $(this).parents(".select_item").toggleClass("active");
    $(this).parents(".select_item").siblings(".select_item").removeClass("active");
})

$(".contact-select").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).find(".contact_date").hide();
    }else {
        $(this).addClass("active");
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let now = year + "/" + month + "/" + date + "  " + hour + ":" + minute + " 聯絡者";
        $(this).find(".contact_date").text(now).show();
    }
    
})

// 新增
// $(".btn-add-record").click(function(){
//     let record;
//     let today = new Date();
//     let year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let date = today.getDate();
//     let now = year + "/" + month + "/" + date;
//     $(this).parents(".modal-content").find(".select_item").each(function(){
//         if($(this).hasClass("active")) {
//             if($(this).hasClass("customize")){
//                 record = $(this).children("input").val();
//             }else {
//                 record = $(this).children("span").text();
//             }
//         }
//     })
//     let contactRecord = $("<div></div>").addClass("d-flex align-items-center mb-2");
//     let contactRecord_state = $("<div></div>").addClass("contact-record_state").text(record);
//     let day = $("<span></span>").addClass("color-gray").text(now);
//     contactRecord.append(contactRecord_state,day);
//     $(".contact-record_content").append(contactRecord);
// })

$(".machine_show").click(function(){
    $(this).find(".machine-arrow").toggleClass("active");
    $(this).parents(".machine_data").children(".machine_hide").slideToggle(300);
})

// 返回
$(".back").click(function(){
    window.history.go(-1);
})

// 勾選異常、客訴
$(".machine_data_state_show").click(function(){
    $(this).parents(".machine_data_state").toggleClass("active");
    $(this).parents(".machine_data_state").children(".machine_data_state_hide").slideToggle(300);
})

// 刪除機器照片
$(document).on("click",".machine_pic-delete",function(){
    $(this).parents(".machine_pic-upload").remove();
})

// 選取機器名稱
$(document).on("click",".machien_select_item",function(){
    let name = $(this).children("span").text();
    let title = $(this).parents(".machine_data").find(".machine_data_name");
    switch(name) {
        case "分離":
            title.text("分離式冷氣");
            break;
        case "吊隱":
            title.text("吊隱式冷氣");
            break;
        case "窗型":
            title.text("窗型冷氣");
            break;
        case "四方吹":
            title.text("四方吹冷氣");
            break;
        case "箱型":
            title.text("箱型冷氣");
            break;
        case "直立":
            title.text("直立式洗衣機");
            break;
        case "滾筒":
            title.text("滾筒式洗衣機");
            break;
        case "水管":
            title.text("水管清洗");
            break;
    }
})

// 新增機器
let machine_data = $("<div class='machine_data'></div>");
let machine_title = $("<div class='d-flex align-items-center justify-content-between machine_show'><div class='d-flex align-items-center'><h5 class='machine_data_name'>新機器</h5></div><div class='d-flex align-items-center'><div class='machine-arrow'><img src='./public/img/icon_arrow-deep-right.svg'></div><img class='machine-delete ms-3' data-bs-toggle='modal' data-bs-target='#confirm-delete' src='./public/img/icon_trash-can.svg'></div></div>");

let machine_hide = $("<div class='machine_hide'></div>");
let machine_class = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>小分類</h4><div class='list-common_second list-social'><div class='select d-flex flex-wrap select-small select-deep'><div class='select_item d-flex align-items-center justify-content-between'><span>主臥</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>次臥</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>客廳</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>小孩房</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>書房/客房</span></div><div class='select_item px-0 select-machine customize d-flex align-items-center justify-content-between'><div class='check'><img class='check_icon' src='./public/img/icon_check.svg'></div><label>其他</label><input type='text'></div></div></div></div>");
let machine_service = $("<div class='list-common d-flex flex-wrap mb-3'><div class='w-100 d-flex align-items-center justify-content-between'><h4 class='list_title-second'>服務項目</h4><img class='icon_question' data-bs-toggle='modal' data-bs-target='#service-intro' src='./public/img/icon_question.svg'></div><div class='list-common_second'><div class='select d-flex flex-wrap select-small select-deep'><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>分離</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>吊隱</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>窗型</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>四方吹</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>直立</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>滾筒</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>水管</span></div><div class='select_item machien_select_item d-flex align-items-center justify-content-between'><span>箱型</span></div></div></div></div>");
let machine_brand = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>品牌</h4><select class='list-common_second' name='' id=''><option value=''>品牌一</option><option value=''>品牌二</option><option value=''>品牌三</option><option value=''>品牌四</option></select></div>");
let machine_num = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>型號</h4><input class='list-common_second'></input></div>");
let machine_state = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>機況</h4><div class='list-common_second'><div class='select d-flex flex-wrap select-small select-deep'><div class='select_item d-flex align-items-center justify-content-between'><span>新機</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>普通</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>老機</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>無法拆洗</span></div><div class=‘select_item d-flex align-items-center justify-content-between'><span>太乾淨</span></div><div class=‘select_item d-flex align-items-center justify-content-between'><span>異常不洗</span></div></div></div></div>");
let machine_year = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>製造年份</h4><div class='list-common_second list-make-time'><input type='text'><span>年(西元)</span></div></div>");
let machine_problem = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>狀況回報</h4><textarea class='list-common_second' name='' id='' cols='30' rows='5'></textarea></div>");
let machine_placeState = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>現場狀況</h4><textarea class='list-common_second' name='' id='' cols='30' rows='5'></textarea></div>");
let machine_abnormal = $("<div class='machine_data_state d-flex flex-wrap align-items-center abnormal mb-3'><div class='d-flex align-items-center machine_data_state_show'><div class='check'><img class='check_icon' src='./public/img/icon_check.svg' alt=''></div><span class='ms-2'>異常</span></div><div class='machine_data_state_hide w-100 mt-2'><div class='mb-2'><label class='d-block mb-1' for=''>異常狀況</label><input class='w-100' type='text'></div><div class='mb-2'><label class='d-block mb-1' for=''>技師判斷</label><input class='w-100' type='text'></div><div class=''><label class='d-block mb-1' for=''>處理結果</label><input class='w-100' type='text'></div></div></div>");
let machine_custom = $("<div class='machine_data_state d-flex flex-wrap align-items-center custom mb-3'><div class='d-flex align-items-center machine_data_state_show'><div class='check'><img class='check_icon' src='./public/img/icon_check.svg' alt=''></div><span class='ms-2'>客訴</span></div><div class='machine_data_state_hide w-100 mt-2'><div class='mb-2'><label class='d-block mb-1' for=''>客訴狀況</label><input class='w-100' type='text'></div><div class='mb-2'><label class='d-block mb-1' for=''>溝通過程</label><input class='w-100' type='text'></div><div><label class='d-block mb-1' for=''>處理結果</label><input class='w-100' type='text'></div></div></div>");
let machine_pic = $("<div class='list-common d-flex flex-wrap mb-3'><h4 class='list_title-second'>照片</h4><div class='list-common_second list-mahcine-pic'><div class='machine_pic-upload d-flex align-items-center'><div class='pic cover-box'><img class='plus' src='./public/img/icon_plus3.svg' alt=''><input type='file' class='machine-upload-icon'><img src='' class='machine_pic-main' alt=''><img class='machine_pic-delete' src='./public/img/icon_delete.svg' alt=''></div><div class='select d-flex flex-wrap select-small select-deep'><div class='select_item d-flex align-items-center justify-content-between'><span>外觀</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>型號</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>洗前</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>洗後</span></div><div class='select_item d-flex align-items-center justify-content-between'><span>其他</span></div></div></div></div></div>");

machine_hide.append(machine_class,machine_service,machine_brand,machine_num,machine_state,machine_year,machine_problem,machine_pic,machine_abnormal,machine_custom);
machine_data.append(machine_title,machine_hide);
$(".add-machine").click(function(){
    $(".machine").append(machine_data);
})


// 管理端 展開案件詳情
$(".case_content").click(function(){
    $(this).parents(".box-common_content").find(".manage-case_hide").slideToggle(300);
    $(this).find(".manage-case_arrow").toggleClass("active");
})

// 補給申請
$(".icon_count").click(function(){
    let input = $(this).parents(".apply-box").children("input").val();
    if($(this).hasClass("minus")){
        if(input>0){
            input--;
        }else {
            input = 0;
        }
    }else if($(this).hasClass("add")){
        input++;
    }
    $(this).parents(".apply-box").children("input").val(input);
})

// 搜尋種類
$(".search-class").change(function(){
    console.log("###");
    if($(this).val()=="月份區間"){
        console.log("$$$");
        $(this).parents(".search").find(".search-input").css("display","none");
        $(this).parents(".search").find(".month-duration").css("display","flex");
    }else {
        $(this).parents(".search").find(".search-input").css("display","flex");
        $(this).parents(".search").find(".month-duration").css("display","none");
    }
})

// 圖片、影片
let pic_index,data_modal,pic_length;
$(".pic_box").click(function(){
    pic_index = $(this).index();
    data_modal = $(this).parents(".pic").data("modal");
    pic_length = $(data_modal).children(".pic_box").length;
    console.log(data_modal);
    let pic_src = $(this).children(".pic_box_content").attr("src");
    let pic_content = $(this).children(".pic_box_content");
    $(".pic-modal").show();
    if(pic_content.hasClass("pic_box_img")) {
        $(".pic-modal_video").hide();
        $(".pic-modal_img").show().attr("src",pic_src);
    }else if(pic_content.hasClass("pic_box_video")){
        $(".pic-modal_img").hide();
        $(".pic-modal_video").show();
        $(".pic-modal_video").children("#modal-video").attr("src",pic_src);
        $(".pic-modal_video").removeClass("playing");
    }
    if(pic_index==0){
        $(".pic-modal_arrow.prev").hide();
    }else if(pic_index==pic_length-1){
        $(".pic-modal_arrow.next").hide();
    }else {
        $(".pic-modal_arrow.prev").show();
        $(".pic-modal_arrow.next").show();
    }
})
$(".pic-modal_close").click(function(){
    $(this).parents(".pic-modal").hide();
    pic_index = "";
    data_modal = "";
    pic_length = "";
})
$(".pic-modal_arrow").click(function(){
    pic_length = $(data_modal).children(".pic_box").length;
    if($(this).hasClass("prev")){
        if(pic_index > 0){
            pic_index--;
        }else {
            pic_index = 0;
        }
    }else if($(this).hasClass("next")){
        if(pic_index < pic_length){
            pic_index++;
        }else {
            pic_index = pic_length;
        }
    }
    if(pic_index==0){
        $(".pic-modal_arrow.prev").hide();
    }else if(pic_index==pic_length-1){
        $(".pic-modal_arrow.next").hide();
    }else {
        $(".pic-modal_arrow").show();
    }
    console.log(pic_index);
    let pic_box = $(data_modal).children(".pic_box").eq(pic_index).children(".pic_box_content");
    let pic_src = pic_box.attr("src");
    if(pic_box.hasClass("pic_box_img")) {
        $(".pic-modal_video").hide();
        $(".pic-modal_img").show().attr("src",pic_src);
    }else if(pic_box.hasClass("pic_box_video")){
        $(".pic-modal_img").hide();
        $(".pic-modal_video").show();
        $(".pic-modal_video").children("#modal-video").attr("src",pic_src);
        $(".pic-modal_video").removeClass("playing");
    }
})

// 首頁案件展開、收合
$(".case-arrow").click(function(){
    if($(this).hasClass("active")){
        $(this).parents(".box-common_content").find(".case_hide").slideUp(300);
        $(this).removeClass("active");
        $(this).children("span").text("看更多");
    }else {
        $(this).parents(".box-common_content").find(".case_hide").slideDown(300);
        $(this).addClass("active");
        $(this).children("span").text("隱藏內容");
    }
})

// 異常、客訴照片刪除
$(document).on("click",".abnormal-pic_delete",function(){
    $(this).parents(".abnormal-pic_content").remove();
})