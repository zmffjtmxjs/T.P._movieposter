var get_body = document.getElementById("main")
get_body.innerHTML = null;
get_body.innerHTML = `
    <header>
    <h2>HEADER 영역</h2>
    </header>
    <div id="menu">
        <div class="h-container">
            <div class="item">menu 1</div>
            <div class="item">menu 2</div>
            <div class="item">menu 3</div>
            <div class="item last">login</div>
        </div>
    </div>
    <nav>
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
    <section>
        list <br><br>
        게시글 리스트 
    </section>
    <footer>
        <h2>FOOTER 영역</h2>
    </footer>
    `;