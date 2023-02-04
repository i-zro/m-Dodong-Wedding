function doSomething() {
    var guestName = $('input[id=guestName]').val();
    var guestPassword = $('input[id=guestPassword]').val();
    var guestMessage = $('input[id=guestMessage]').val();

    if (!guestName) {alert("이름을(를) 입력해주세요."); return;}
    if (!guestPassword) {alert("비밀번호(을)를 입력하세요."); return;}
    if (!guestMessage) {alert("메세지(을)를 입력하세요."); return;}

    $.ajax({
        url:'https://www.barunsonmcard.com/Mcard/GuestBook/292761',
        type: 'post',
        data: {"name": guestName,   "password":guestPassword,   "message": guestMessage},

        success: function(data){
            alert(data);
        }
    })
  }

// 방명록 전체보기
function guestBookAll() {
    loadGuestbook(invitationId, 'all', 0);
}

function infoDetail() {
    $(this).parent('.list_wrap').toggleClass('on');
    $('.list_con').slideToggle();
};