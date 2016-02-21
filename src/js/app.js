/**
 *
 *
 * SUID site
 */
var app = angular.module('suid',[]);

app.controller('homeController',function($scope){
    $scope.portfolio = [
        {
            tipo: 'video',
            titulo: 'alto video wacho',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis, distinctio ducimus, eveniet id magnam minima nulla perspiciatis quasi quod similique temporibus tenetur voluptatem. Accusamus corporis dignissimos dolore sint vitae!'

        },{
            tipo: 'web',
            titulo: 'alta we wacho',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis, distinctio ducimus, eveniet id magnam minima nulla perspiciatis quasi quod similique temporibus tenetur voluptatem. Accusamus corporis dignissimos dolore sint vitae!'

        }
    ];
    $scope.texto = 'hola papa';
});
