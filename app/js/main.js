var images = document.querySelectorAll( "img" );

function greetingsImage() {
    console.log( "You clicked the '" + this.alt + "' image!" );
}

images[0].addEventListener( "dblclick", greetingsImage );
images[1].addEventListener( "dblclick", greetingsImage );
