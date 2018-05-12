  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>
  <div class="footer dot-w">
    <div class="footer__top">
      <div class="container">
        <div class="row">
          <div class="col-md-3 offset-md-9 dot-bg d-flex justify-content-center">
            <button type="button" class="boton" data-toggle="modal" data-target="#callback">Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3 text-left">
          </div>
          <div class="col-md-3">
            <a href="tel:"></a>
            <br>
            <a href="mailto:"></a>
          </div>
          <div class="col-md-3 text-center">
            <?php if( have_rows('footer_socials', $front__id) ): ?>
              <div class="footer-socials text-center">
                <?php while ( have_rows('footer_socials', $front__id) ) : the_row(); ?>
                  <a href="<?php the_sub_field('link'); ?>" class="social fa <?php the_sub_field('icon'); ?>" title="<?php the_sub_field('title'); ?>"></a>
                <?php  endwhile; ?>
              </div>
            <?php  endif; ?>
          </div>
          <div class="col-md-3 text-center">
            © ССК ОЛИМП, 2014 - <?php echo date("Y"); ?>
            <a href="/?p=211">Политика конфиденциальности</a> </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-decor">
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="order" tabindex="-1" role="dialog" aria-labelledby="modal-callback-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-callback-label">Оставить заявку</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body" id="order-form">
          <?php echo do_shortcode('[contact-form-7 id="234" title="Заявка Техники"]'); ?>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="callback" tabindex="-1" role="dialog" aria-labelledby="modal-callback-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-callback-label">Заказать звонок</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body" id="callback-form">
          <?php echo do_shortcode('[contact-form-7 id="235" title="Заказать звонок"]'); ?>
        </div>
      </div>
    </div>
  </div>

    <?php wp_footer(); ?>

</body>
</html>
