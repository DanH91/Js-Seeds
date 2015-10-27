import angular from 'angular';

export default angular.module('component', [])
	.factory('client', Client)
	.directive('user', UserComponent);

function UserComponent(){
    return {
	restrict: 'EA',
	template: '<div>User component !</div>',
	link: () => { console.log('every thing works quiet well'); }
    };    
}

function Client(){
    return {
	loggedUser: ()=> { return 'default'; },
	logIn: ()=>{ console.log('user log in'); }
    };
}
