import Rect  from "./b";
import $ from "jquery";

const rect = new Rect(10,10);
let area = rect.cacl();
$('#app').html( area + 'M<sup>2</sup>' );