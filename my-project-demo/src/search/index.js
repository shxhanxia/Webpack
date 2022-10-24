'use strict';

import $ from 'jquery';
import './index.less';
// import '../../common'
import Img from './1.jpg';
import {a} from './tree-shaking';

document.write('search page');
let img = document.createElement('img');
img.src = Img;
img.onclick = function () {
    import('./text').then(text => {
        console.log(text.default());
    });
};
document.body.appendChild(img);
let str = a();
if (false) {
    a();
}
console.log(1);