module.exports = {
  Post_Reader_HTML:function(title, sectiontitle, createdate, modifydate, description, back, modify, remove) {
    if(modifydate == null){
      var create_modify_date = `<h5>게시일 : ${createdate}</h5>`;
    } else {
      var create_modify_date = `<h5>게시일 : ${createdate} (수정됨 : ${modifydate})</h5>`;
    }

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
              <title>${title}</title>
              <script src="js/jquery-3.5.1.min.js"></script>
              <link rel="stylesheet" href="css/commen.css">
              <link rel="stylesheet" href="css/post_read.css">
          </head>
          <body id="main">
              <div id="myMenu">
                  <div class="h-container">
                      <div class="item middle">${back}</div>
                      <div class="item middle">${modify}</div>
                      <div class="item middle">${remove}</div>
                      <div class="item last">login</div>
                  </div>
              </div>
                <nav id="myNav">
                    navigation
                    <ul>장르
                        <a href=""><li>장르1</li></a>
                        <a href=""><li>장르2</li></a>
                    </ul>
                    <ul>연도
                        <a href=""><li>(2000~2010)</li></a>
                        <a href=""><li>(2010~2020)</li></a>
                    </ul>
                </nav>
                <section id="post_Section">
                  <h3>${sectiontitle}</h3>
                  ${create_modify_date}
                  ${description}
                </section>
              </nav>
              <script src="js/html_functions.js"></script>
          </body>
      </html>
    `;
  },

  Editer_HTML:function(movies, post_id, title, nickname, description) {
    if(arguments.length == 1) {
      var back = ``
      var form = `
      <form name="post_editer" action="/create_process" method="post" onsubmit="return data_integrity()">
        <p><input type="text" name="edit_title" placeholder = "제목(생략가능)"></input></p>
        영화 제목 : ${movies}<input type="hidden" name="user_nickname" value="관리자">
        <p><textarea name="edit_description" placeholder = "내용"></textarea><p>
        <p><input type="submit">
      </form>
      `;
    } else {
      var back = `post_id=${post_id}`
      var form = `
        <form name="post_editer" action="/update_process" method="post" onsubmit="return data_integrity()">
          <input type="hidden" name="post_id" value="${post_id}">
          <p><input type="text" name="edit_title" placeholder = "제목(생략가능)" value="${title}"></input></p>
          영화 제목 : ${movies}<input type="hidden" name="user_nickname" value="${nickname}">
          <p><textarea name="edit_description" placeholder = "내용">${description}</textarea><p>
          <p><input type="submit">
        </form>
      `;
    }

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>게시물 작성</title>
        <link rel="stylesheet" href="css/commen.css">
      </head>
      <body>
        <div id="myMenu">
          <div class="h-container">
            <div class="item middle">
              <form action="/${back}" method="get">
                <input type="submit" value="돌아가기">
              </form>
            </div>
            <div class="item middle">menu2</div>
            <div class="item middle">menu3</div>
            <div class="item last">login</div>
          </div>
        </div>
        <section>
            ${form}
          <script src="js/html_functions.js"></script>
        </section>
      </body>
    </html>
    `;
  },

  comment_part_HTML:function() {

    return `

    `
  },

  GetFormatDate:function(date) {
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }
}