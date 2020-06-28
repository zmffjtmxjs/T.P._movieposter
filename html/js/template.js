module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
        <title>${title}</title>
        <style>
            body {background-color: azure;}
        </style>
        <script src="js/jquery-3.5.1.min.js"></script>
        <link rel="stylesheet" href="css/title_header.css">
        <link rel="stylesheet" href="css/menu_bar.css">
        <link rel="stylesheet" href="css/nav.css">
        <link rel="stylesheet" href="css/display_main.css">

    </head>
    <body id="main">
        <header>
            pagetitle
        </header>
        <div id="myMenu">
            <div class="h-container">
                <div class="item middle">menu 1</div>
                <div class="item middle">menu 2</div>
                <div class="item middle">menu 3</div>
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
        <section id="mySection">
          ${list}
          ${control}
          ${body}
        </section>
        
        <script src="js/displayer.js"></script>
        <script src="js/initializer.js"></script>
        <script src=""></script>
        <script src=""></script>
    </body>
</html>
    `;
  }
}