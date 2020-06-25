//Section(주내용) 부분의 동적화 담당

function list_displayer() {
    document.getElementById("mySection").innerHTML = `
    <table border = 1>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목(영화이름)</th>
                <th>게시자</th>
                <th>게시일</th>
            </tr>
        </thead>
        <tbody id="post_list">
        </tbody>
    </table>
    `;

    var target_list = document.getElementById("post_list");

    for(i in post) {
        var post_number = Number(i) + 1;
        target_list.innerHTML = target_list.innerHTML + `
        <tr>
            <td>` + post_number + `</td>
            <td><a>` + post[i][0] + `(` + post[i][1] + `)</a></td>
            <td>` + post[i][2] + `</td>
            <td>` + post[i][3] + `</td>
        </tr>`;
    }
}