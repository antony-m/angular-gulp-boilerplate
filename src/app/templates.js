angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/app/about/about.tpl.html","<div class=container>{{vm.about}}</div>");
$templateCache.put("/app/contact/contact.tpl.html","<div class=container>{{vm.contact}}</div>");
$templateCache.put("/app/home/home.tpl.html","<div class=container>{{vm.home}}</div>");}]);