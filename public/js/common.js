$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".nav-main").slideToggle(500);
})

// 選項
$(".select_item").click(function(){
    if($(this).parents(".select").hasClass("multiple")){
        $(this).toggleClass("active");
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

// 新增
$(".btn-add-record").click(function(){
    let record;
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let now = year + "/" + month + "/" + date;
    $(this).parents(".modal-content").find(".select_item").each(function(){
        if($(this).hasClass("active")) {
            if($(this).hasClass("customize")){
                record = $(this).children("input").val();
            }else {
                record = $(this).children("span").text();
            }
        }
    })
    let contactRecord = $("<div></div>").addClass("d-flex align-items-center mb-2");
    let contactRecord_state = $("<div></div>").addClass("contact-record_state").text(record);
    let day = $("<span></span>").addClass("color-gray").text(now);
    contactRecord.append(contactRecord_state,day);
    $(".contact-record_content").append(contactRecord);
})

$(".machine-arrow").click(function(){
    $(this).toggleClass("active");
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