$(document).ready(function()
{
	$('.boton').each(function()
	{
		$(this).wrapInner('<div class=botontext></div>');
		$(this).find('.botontext').clone().appendTo($(this));

		for (var i = 0; i < 4; ++i)
		{
			$(this).append('<span class="twist"></span>');
		}

		$(this).find('.twist').css('width', '25%').css('width', '+=3px');
	});

	$(window).resize(function()
	{
		$('.boton').each(function()
		{
			$(this).find('.twist').css('width', '25%').css('width', '+=3px');
		});
	});
});