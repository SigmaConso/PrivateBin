
function generatePassword(parms)
{
	parms = $.extend( {	charset	: '',
						length	: 8
					}, parms );
	var str = '';
	var n = parms.charset.length;
	for( var i=0; i<parms.length; ++i )
	{
		var j = (Math.random()*n)|0;
		str += parms.charset.charAt( j );
	}
	return str;
}

$(document).ready( function()
	{
		$('#passwordLength').val( 20 );  // Initial size
		$('#passwordCharset').val( "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_{|}~" );
		$('#passwordGenerate').click( function()
			{
				var charset = $('#passwordCharset').val();
				var length = $('#passwordLength').val()|0;
				var result = generatePassword({	charset	: charset,
												length	: length
												});

				$('#passwordGeneratedDate').text( ''+Date() );
				$('#message').val( result );
			} );
	} );
$
