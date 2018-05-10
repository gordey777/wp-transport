<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div class="container">
    <br>
    <h1 class="page__header text-center"><?php the_title(); ?></h1><?php edit_post_link(); ?>
  </div>
  <div class="container z-1">

    <div class="spec-categories">
      <div class="row">
        <?php
        $teh_cats = get_categories( array(
          'child_of' => 9,
          'parent' => 9,
          'hide_empty' => 0
        ) );
        if( $teh_cats ){
          foreach( $teh_cats as $cat ){
          $curr__ID = $cat->cat_ID;
          $curr_term = 'category_' . $curr__ID;
          $curr__type = get_field('cat_type', $curr_term);


          if(get_field('cat_img', $curr_term)){
            $thumb_url = get_field('cat_img', $curr_term)['sizes']['medium'];
          } else {
            $thumb_url = get_template_directory_uri() . '/img/noimage.jpg';
          }

          $teh_catID = $cat->term_id; ?>
          <div class='looper col-sm-6 col-md-4 col-lg-2'>

            <a href="<?php echo get_category_link( $teh_catID ); ?>" title="<?php echo $cat->name; ?>" class="spec-categories__item">
              <div class="spec-categories__item-cover" style="background-image: url(<?php echo $thumb_url; ?>)" ></div>
              <div class="spec-categories__item-footer"><?php echo $cat->name; ?></div>
            </a>
          </div><!-- /looper -->

          <?php }
        } ?>

      </div>
    </div>

    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php the_content(); ?>
      <?php if( have_rows('questions') ): ?>
        <h2><?php the_field('question_title'); ?></h2>
        <div class="faq">
          <?php while ( have_rows('questions') ) : the_row(); ?>
            <div class="faq-item">
              <div class="faq-item-questions">
                <span class="faq-item-questions-link"><?php the_sub_field('question'); ?></span>
              </div>
              <div class="faq-item-answer">
                <p><?php the_sub_field('answer'); ?></p>
              </div>
            </div>
          <?php endwhile; ?>
        </div>
      <?php endif; ?>


      <?php if( have_rows('advantages') ): ?>
        <h2><?php the_field('advantage_title'); ?></h2>
        <p><?php the_field('advantage_before'); ?></p>
        <div class="utp">
          <?php while ( have_rows('advantages') ) : the_row(); ?>
            <?php $image = get_sub_field('icon'); ?>
            <div class="utp-block">
              <div class="utp-img">
                <?php if ( !empty($image)) {  ?>
                  <img src="<?php echo $image['url']; ?>">
                <?php } ?>
              </div>
              <div class="utp-text">
                <p><?php the_sub_field('desc'); ?></p>
              </div>
            </div>
          <?php  endwhile; ?>
        </div>
        <p><?php the_field('advantages_after'); ?></p>
        <br>
      <?php endif; ?>
    </div>

  <!-- Наши объекты. -->
  <div class="belt-objects">
    <div class="belt-objects-container">
      <div class="container">
        <div class="belt-object__title">Наши объекты</div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <a href="#/o-kompanii/nashi-obekty/obekty-universiady/" class="object belt-objects__first">
              <div class="object__body">
                <div class="object__preview" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/upload/101bad2b38582d8847a5e574f381b237.jpg);">
                  <div class="object__title">Объекты универсиады</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6">
            <div class="belt-objects__title">
              АСТ24 выполняет все виды строительных работ, предоставляет всю спецтехнику в аренду </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <a href="#/o-kompanii/nashi-obekty/perevozka-negabaritnogo-gruza/" class="object">
              <div class="object__body">
                <div class="object__preview" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/upload/49721f43a9126641e4cea0b2434157f2.jpg);">
                  <div class="object__title">Перевозка негабаритного груза </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-lg-3">
            <a href="#/o-kompanii/nashi-obekty/perevozka-negabaritnykh-modulnykh-kotelnykh/" class="object">
              <div class="object__body">
                <div class="object__preview" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/upload/e7507a2c22b4fffbcc862a968ea14abb.png);">
                  <div class="object__title">Перевозка негабаритных модульных котельных</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-lg-3">
            <a href="#/o-kompanii/nashi-obekty/nefteprovod-kuyumba-tayshet/" class="object">
              <div class="object__body">
                <div class="object__preview" style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/upload/66c03011c2a7eb87eb8f3a9e2600bdaf.jpg);">
                  <div class="object__title">Строительство нефтепровода Куюмба-Тайшет</div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="object all-objects">
              <a href="#/o-kompanii/nashi-obekty/" class="btn btn-secondary btn-lg">Все объекты</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Наши объекты. -->
  <!-- Благодарственные письма. -->
  <div class="belt-messages">
    <div class="belt-messages-container">
      <div class="container">
        <div class="belt-messages__title">Благодарственные письма</div>
        <div class="swiper-container">
          <div class="swiper-wrapper" id="lg-homepage-messages">
            <div class="swiper-slide">
              <div class="d-flex align-items-center">
                <div class="col-xl-8">
                  <div class="belt-messages__text">
                    Уважаемый Владислав Игоревич, ООО «ТД СпецТранс» выражает благодарность компании ООО «АСТ-24» за оперативность и высокое качество предоставленной техники. За время сотрудничества организация проявила ...
                    <div class="belt-message__author">
                      <b></b> </div>
                  </div>
                </div>
                <a href="/img/62b2fe1d98a4df226cbdea78365dddd7.jpg" class="col-xl-4 message">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/62b2fe1d98a4df226cbdea78365dddd7.jpg" alt="Письмо от СпецТранс">
                </a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="d-flex align-items-center">
                <div class="col-xl-8">
                  <div class="belt-messages__text">
                    Уважаемый Владислав Игоревич! Коллектив ООО «СибГрупп-Н» благодарит ООО «АСТ-24» за многолетнее сотрудничество, за время которого вы доказали надежность и ответственность. Хотим отметить ваш профессиональный...
                    <div class="belt-message__author">
                      <b></b> </div>
                  </div>
                </div>
                <a href="/img/85cec597fa0b646e911b523c0f715767.jpg" class="col-xl-4 message">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/85cec597fa0b646e911b523c0f715767.jpg" alt="Письмо от СибГрупп-Н">
                </a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="d-flex align-items-center">
                <div class="col-xl-8">
                  <div class="belt-messages__text">
                    Уважаемый Владислав Игоревич, Компания ООО "ПК КС" искренне благодарит ООО "АСТ-24" за плодотворное сотрудничество, профессионализм и оперативность. Нам приятно иметь дело с таким партнером!
                    <div class="belt-message__author">
                      <b></b> </div>
                  </div>
                </div>
                <a href="/img/33834212ac50f65bdab7e58d94124f1a.jpg" class="col-xl-4 message">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/33834212ac50f65bdab7e58d94124f1a.jpg" alt="Письмо от ПК КС">
                </a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="d-flex align-items-center">
                <div class="col-xl-8">
                  <div class="belt-messages__text">
                    Настоящим рекомендательным письмом хотим отметить успешный опыт сотрудничества ЗАО "СУ-ТГС" с компанией ООО "АСТ-24", которая является нашим партнером в области оказания транспортных...
                    <div class="belt-message__author">
                      <b></b> </div>
                  </div>
                </div>
                <a href="/img/0b598a425bad38e73318493dd8f4362a.jpg" class="col-xl-4 message">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/0b598a425bad38e73318493dd8f4362a.jpg" alt="Письмо от СУ-ТГС">
                </a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="d-flex align-items-center">
                <div class="col-xl-8">
                  <div class="belt-messages__text">
                    Выражаем вам огромную благодарность и глубокую признательность за оперативную помощь в ликвидации аварии водопроводной сети СОК "Зеленые горки". Надеемся на дальнейшее взаимовыгодное сотрудн...
                    <div class="belt-message__author">
                      <b></b> </div>
                  </div>
                </div>
                <a href="/img/300eae03113d654abfd8a762abdbcd9e.jpg" class="col-xl-4 message">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/300eae03113d654abfd8a762abdbcd9e.jpg" alt="Письмо от Зелёные горки">
                </a>
              </div>
            </div>
          </div>
          <div class="d-inline-block">
            <div class="messages__controls mt-4">
              <div class="messages__control messages__control--prev mr-3"></div>
              <div class="messages__count">
                <span class="messages__count-current">1</span> / <span class="messages__count-total"></span>
              </div>
              <div class="messages__control messages__control--next ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Благодарственные письма. -->
  <!-- Партнеры. -->
  <div class="slider-partners">
    <div class="container">
      <div class="slider-partners__title">Наши партнеры</div>
      <div class="slider-partners__inner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/c097fb7cd3c54051483738f689a3309f.png" alt="Полюс золото">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/f119a342662bfb6ac0648b090315bfce.png" alt="Универсиада 2019 Красноярск">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/bff331346b24d291124ad8e23c826715.png" alt="Промкотлоснаб">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/b5357808b319dbca389747141c1bf6be.gif" alt="Эвалар">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/a05c79fc3017142277b11ab3794f98a8.png" alt="НВБС">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/48bfa3a520270c929f84d2ca70cd8f81.png" alt="ПМК Сибири">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/36e584ed157538453d10f1f083cb4cea.png" alt="СЗ &quot;Море&quot;">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/e2dc5c5997bbcd7be9d018cde4ec647f.gif" alt="ГУФСИН">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/f0ad9f740b5def6951b53140c93cba89.png" alt="Стальмонтаж">
            </div>
            <div class="swiper-slide">
              <img src="<?php echo get_template_directory_uri(); ?>/img/bd7381861a1dd0c52cf25dc2bde3e45f.png" alt="ПК КС">
            </div>
          </div>
        </div>
        <div class="slider-partners__control-prev"></div>
        <div class="slider-partners__control-next"></div>
      </div>
    </div>
  </div>
  <!-- / Партнеры. -->
  <br>
  <br>





  <?php endwhile; endif; ?>


<?php get_footer(); ?>
