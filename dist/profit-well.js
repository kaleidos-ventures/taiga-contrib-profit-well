/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2021-present Kaleidos Ventures SL
 */

(function(){var ProfitWellDirective,module,template;template="<script type=\"text/javascript\">\n  (function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);  })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');\n\n  profitwell('auth_token', '<%= token %>');\n  profitwell('user_email', '<%= email %>');\n</script>",ProfitWellDirective=function($compile,$auth,$config){var link;return link=function($scope,$el,$attrs){var context,profitWellScript,ref;return context={token:$config.get("profitWellToken"),email:null!=(ref=$auth.getUser())?ref.email:void 0},profitWellScript=_.template(template)(context),$el.append(profitWellScript)},{restrict:"E",link:link}},module=angular.module("profitWellPlugin",[]),module.directive("body",["$compile","$tgAuth","$tgConfig",ProfitWellDirective])}).call(this);