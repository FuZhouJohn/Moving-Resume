function writeCode(prefix, content, fn) {
    let domCode = document.querySelector("#code");
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        domCode.innerHTML = Prism.highlight(
            prefix + content.substring(0, n),
            Prism.languages.css,
            "css"
        );
        codeStyle.innerHTML = prefix + content.substring(0, n);
        domCode.scrollTop = domCode.scrollHeight;
        if (n >= content.length) {
            window.clearInterval(id);
            fn && fn.call();
        }
    }, 50);
}
function writeMarkdown(markdown, fn) {
    let paper = document.querySelector(".paper>.content");
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        paper.innerHTML = markdown.substring(0, n);
        paper.scrollTop = paper.scrollHeight;
        if (n >= markdown.length) {
            window.clearInterval(id);
            fn && fn.call();
        }
    }, 30);
}
function createPaper(fn) {
    let paper = document.createElement("div");
    paper.className = "paper";
    let content = document.createElement("pre");
    content.className = "content";
    paper.append(content);
    document.body.append(paper);
    fn && fn.call();
}
function convertMarkdownToHTML(md, fn) {
    let div = document.createElement("div");
    div.className = "html markdown-body";
    div.innerHTML = marked(md);
    let markdownContainer = document.querySelector(".paper>.content");
    markdownContainer.replaceWith(div);
    fn && fn.call();
}
let content = `/*
 * 面试官您好，我叫庄骥南。
 * 接下来我通过这个简历介绍一下我自己。
 * 首先来准备一些样式。
 */

html{
    background:#95a5a6;
}

*{
    transition: all 1s;
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    display:flex;
    height:100vh;
    padding:16px;
}
#code{
    flex:1;
    border:1px solid #ecf0f1;
    padding:16px;
    font-size:16px;
    background:#2c3e50;
    overflow:auto;
}

/* 接下来添加代码高亮 */

.token.selector {
    color: #f1c40f;
}
.token.punctuation {
    color: #e67e22;
}
.token.property {
    color: #3498db;
}
#code{
    color:#e74c3c;
}

/* 好了，接下准备一张白纸 */
`;
let content2 = `
.paper{
    flex:1;
    background:white;
    margin-left:16px;
}

/* 这样我就可以在白纸上写字了，请看右边 */
`;
let content3 = `
/* 
 * 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`;
let content4 = `
/* 让他看起来舒服一点，添加一一些样式 */

.paper{
    padding:16px;
}

/*
 * 这就是我的简历
 * 谢谢观看
 */
`;
let markdown1 = `# 自我介绍

我叫庄骥南，1994 年 5 月出生，福建农林大学毕业，目前的前端经验为一年，希望能应聘前端开发岗位

# 技能介绍

掌握 JavaScript、CSS、Vue.js、小程序开发

# 个人项目

 1. [CSS练手小组件](https://github.com/FuZhouJohn/CSS-Toolkit)
 2. [个人简历](https://fuzhoujohn.github.io/resume/)
 3. [我的导航](https://fuzhoujohn.github.io/myNavigation/index.html)
 4. [JS练手](https://github.com/FuZhouJohn/JS-Practice)
 5. [画板](https://fuzhoujohn.github.io/canvas/)
 
# 联系方式
- QQ 492073467
- Email zhuangjinan2018@gmail.com
- 手机 18559105115`;

writeCode("", content, () => {
    createPaper(() => {
        writeCode(content, content2, () => {
            writeMarkdown(markdown1, () => {
                writeCode(content + content2, content3, () => {
                    convertMarkdownToHTML(markdown1, () => {
                        writeCode(
                            content + content2 + content3,
                            content4,
                            () => {}
                        );
                    });
                });
            });
        });
    });
});
