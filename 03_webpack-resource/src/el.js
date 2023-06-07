/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-06-06 20:07
 * @LastAuthor : wangchao
 * @LastTime   : 2023-06-06 20:18
 * @desc       :
 */

import "./css/style.css"
import "./css/aa.less"
import aa from "./img/aa.png"
import a from "./img/a.png"

const el = document.createElement("div")
const img = document.createElement("img")
const img1 = document.createElement("img")
img.src = aa
img1.src = a

el.className = "t"
el.innerHTML = "123"

document.body.appendChild(el)
document.body.appendChild(img)
document.body.appendChild(img1)
