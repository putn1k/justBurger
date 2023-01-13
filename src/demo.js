const burger = new JustBurger( {
  animationSpeed: 400,
  activeClass: 'custom-class',
  menuId: 'menuList',
  isOpen: ( burger ) => {
    console.log( 'hello world' );
  },
  isClose: ( burger ) => {
    console.log( 'goodbye world' );
  }
} );
