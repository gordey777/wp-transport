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
            © ООО «АСТ24», 2014 - 2018
            <a href="#/politika-konfidentsialnosti/">Политика конфиденциальности</a> </div>
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
          <form id="orderForm">
            <input type="hidden" name="sessid" id="sessid" value="f4d304b3b5707c5c8d38b757e8ac3e94">
            <input type="hidden" name="AJAX_CALL" value="Y">
            <input type="hidden" name="iblock_id" value="10">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="rent">Услуга</label>
                  <input type="text" class="form-control" name="rent" id="rent" readonly="">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="name">Как к вам обращаться *</label>
                  <input type="text" class="form-control" name="name" id="name" required="">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="mail">Электронная почта</label>
                  <input type="email" class="form-control" name="mail" id="mail">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="phone">Телефон *</label>
                  <input type="tel" class="form-control" name="phone" id="phone" required="">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="message">Дополнительная информация</label>
                  <textarea cols="30" rows="4" class="form-control" name="message" id="message"></textarea>
                </div>
                <div class="form-group mb-4">
                  <label for="rule">
                    <input type="checkbox" checked="checked" name="rule" id="rule" required=""> Ознакомьтесь с <a href="#/politika-konfidentsialnosti/">политикой конфиденциальности</a> и подтвердите согласие на обработку персональных данных</label>
                </div>
                <div class="form-group mb-4">
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Отправить</button>
                  </div>
                </div>
                Поля отмеченные *, обязательны для заполнения
              </div>
            </div>
          </form>
          <div class="success-msg text-center">
            <p>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время.</p>
            <button class="new-order btn btn-primary btn-lg">Новая заявка</button>
          </div>
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
          <form id="callbackForm">
            <input type="hidden" name="sessid" id="sessid_1" value="f4d304b3b5707c5c8d38b757e8ac3e94">
            <input type="hidden" name="AJAX_CALL" value="Y">
            <input type="hidden" name="iblock_id" value="11">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="name">Как к вам обращаться *</label>
                  <input type="text" class="form-control" name="name" id="name" required="">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="mail">Электронная почта</label>
                  <input type="email" class="form-control" name="mail" id="mail">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="phone">Телефон *</label>
                  <input type="tel" class="form-control" name="phone" id="phone" required="">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="message">Дополнительная информация</label>
                  <textarea cols="30" rows="4" class="form-control" name="message" id="message"></textarea>
                </div>
                <div class="form-group mb-4">
                  <label for="rule">
                    <input type="checkbox" checked="checked" name="rule" id="rule" required=""> Ознакомьтесь с <a href="#/politika-konfidentsialnosti/">политикой конфиденциальности</a> и подтвердите согласие на обработку персональных данных
                  </label>
                </div>
                <div class="form-group mb-4">
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Отправить</button>
                  </div>
                </div>
                Поля отмеченные *, обязательны для заполнения
              </div>
            </div>
          </form>
          <div class="success-msg text-center">
            <p>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время.</p>
            <button class="new-callback btn btn-primary btn-lg">Новая заявка</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    <?php wp_footer(); ?>

</body>
</html>
