$(document).ready(function() {


	// 公用头部
	var header = '<div class="f_header_box">'+
		            '<div class="f_header">'+
		                '<div class="fl logo">'+
		                    '<img src="../images/logo.png" alt="无锡市服务外包教育集团logo" />'+
		                '</div>'+
		                '<div class="fl">'+
		                    '<span>信息交流 • 人才培训 • 协调沟通 • 维权服务</span>'+
		                '</div>'+
		            '</div>'+
		        '</div>'+
		        '<div class="f_nav">'+
		            '<ul></ul>'+
		        '</div>';
	$(".common_header").append(header);



    var data = [{
            'name': '集团首页',
            'url':'../index/index.html',
        },
        {
            'name': '集团概况',
            'url':'../general_situation/general_situation.html',
            'sub': [
                {'name':'集团简介','url':'../general_situation/general_situation.html'},
                {'name':'成员单位','url':'../general_situation/member.html'},
                {'name':'集团章程','url':'../general_situation/statutes.html'},
                {'name':'联系我们','url':'../general_situation/contact.html'}
            ]
        },
        {
            'name': '师资队伍',
            'url':'../teachers/teacher_construction.html',
            'sub': [
                {'name':'师资建设','url':'../teachers/teacher_construction.html'},
                {'name':'专兼教师队伍信息库','url':'../teachers/teacher_information.html'}
            ]
        },
        {
            'name': '教育教研',
            'url':'../cooperation/cooperation.html',
            'sub': [
                {'name':'校企合作','url':'../cooperation/cooperation.html'},
                {'name':'校校合作','url':'../cooperation/school_cooperation.html' },
                {'name':'专业课件资源','url':'../cooperation/resources.html'}
            ]
        },
        {
            'name': '招聘创业',
            'url':'../recruit/recruit.html',
            'sub': [
                {'name':'招聘创业','url':''},
                {'name':'就业快讯','url':''}
            ]
        },
        {
            'name': '行业动态',
            'url':'../research/research.html'
        }
    ];

    // // 添加导航
    for (var i = 0; i < 6; i++) {
            var jsonLength = 0;
            for(var item in data[i]['sub']){
                jsonLength++;
            };
            var nav = '<li>' +
                    '<a href="'+data[i].url+'">' + data[i].name + '</a>' +
                    '<div class="sub_nav">'+
                    '</div>'+
            '</li>';
            $(".f_nav ul").append(nav);
            console.log(jsonLength)
            for (var j = 0; j < jsonLength; j++) {
                $('.sub_nav').eq(i).append('<a href="'+data[i]['sub'][j]['url']+'" class="ds">'+data[i]['sub'][j]['name']+'</a>');
            }; 

    };







   



    // 子导航动画
    $(".f_nav ul li").mouseenter(function(event) {
        $(this).children('.sub_nav').addClass('active');
        $(this).siblings().children('.sub_nav').removeClass('active')
    }).mouseleave(function(event) {
        $(this).children('.sub_nav').removeClass('active');
    });

    // 窗口滚动导航贴顶
    $(window).scroll(function(event) {
        var top = $(this).scrollTop();
        if (top >= 110) {
            $('.f_nav').css({
                'position': 'fixed',
                'top': 0
            })
        } else {
            $('.f_nav').css({
                'position': 'absolute',
                'top': 110 + 'px'
            })
        }
    });



});