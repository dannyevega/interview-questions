// 1. Explain Event Bubbling

var Foo = function(a){
	function bar(){
		return a;
	}

	this.baz = function(){
		return a;
	}
}

Foo.prototype.biz = function(){
	return a;
}

var f = new Foo(7);

// What will these calls return?
f.bar(); // unknown --> d.bar is not a function BECAUSE it is a closure
f.baz(); // 7
f.biz(); // undefined

// Now, make all calls above return 7
var Foo = function(a){
	this.a = a;
	this.bar = function(){
		return a;
    }
	this.baz = function(){
		return a;
	}
}

Foo.prototype.biz = function(){
	return this.a;
}

Built a small UI component // https://imgur.com/wmnmXsX
