<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>

<?php $front__id = (int)(get_option( 'page_on_front' )); ?>

<body <?php body_class(); ?>>
  <header class="header dot-w">
    <div class="container">
      <div class="header-desktop">
        <div class="row">
          <div class="header-l">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              <a href="<?php echo home_url(); ?>" class="header__logotype">
            <?php } else { ?>
              <span class="header__logotype">
            <?php } ?>
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              </a>
            <?php } else { ?>
              </span>
            <?php } ?>
          </div>

          <div class="header-r ml-2 mr-3">
            <div class="header__top">
              <div class="row mb-3">
                <div class="col-md-4 col-lg-4">
                  <a href="<?php echo home_url(); ?>" rel='nofollow' class="logo-text"><?php the_field('head_slogan', $front__id); ?></a>
                </div>

                <?php if( have_rows('head_phones', $front__id) ): ?>
                  <?php while ( have_rows('head_phones', $front__id) ) : the_row(); ?>
                    <div class="col-md-4 col-lg-3 text-right">
                      <div class="header__phone">
                        <div><?php the_sub_field('title'); ?></div>
                        <div><a href="tel:<?php echo preg_replace("/[^0-9]/","",get_sub_field('tel_number')); ?>"><?php the_sub_field('tel_number'); ?></a></div>
                      </div>
                    </div>
                  <?php  endwhile; ?>
                <?php endif; ?>

                <div class="col-md-4 col-lg-2 d-flex justify-content-end">
                  <button type="button" class="boton" data-toggle="modal" data-target="#callback">Заказать звонок</button>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <div class="mr-4">
              </div>
              <div class="header__menu-wrapper">
                <nav class="header-menu">
                  <?php wpeHeadNav(); ?>
                </nav>
              </div>
            </div>
          </div>
          <!-- / Правая часть шапка. -->
        </div>
        <!-- / .row -->
      </div>
      <div class="header-mobile">
        <div class="header-mobile__inner">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              <a href="<?php echo home_url(); ?>" class="header__logotype">
            <?php } else { ?>
              <span class="header__logotype">
            <?php } ?>
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              </a>
            <?php } else { ?>
              </span>
            <?php } ?>
          <div class="d-flex align-items-center hidden-md-down">
                <?php if( have_rows('head_phones', $front__id) ): ?>
                  <?php while ( have_rows('head_phones', $front__id) ) : the_row(); ?>
                      <div class="header__phone ml-3">
                        <div><?php the_sub_field('title'); ?></div>
                        <div><a href="tel:<?php echo preg_replace("/[^0-9]/","",get_sub_field('tel_number')); ?>"><?php the_sub_field('tel_number'); ?></a></div>
                      </div>
                  <?php  endwhile; ?>
                <?php endif; ?>

            <div class="boton ml-3" data-toggle="modal" data-target="#callback">Заказать звонок</div>
          </div>
          <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="header-mobile-panel-layer"></div>
  <div class="header-mobile-panel">
    <div class="mb-3">
      <div class="d-flex">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              <a href="<?php echo home_url(); ?>" class="header__logotype">
            <?php } else { ?>
              <span class="header__logotype">
            <?php } ?>
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
            <?php if ( !is_front_page() && !is_home() ){ ?>
              </a>
            <?php } else { ?>
              </span>
            <?php } ?>
        <div class="ml-3">
          <a href="<?php echo home_url(); ?>" class="logo-text mb-2"><?php the_field('head_slogan', $front__id); ?></a>
          <div><a href="tel:<?php echo preg_replace('/[^0-9]/','',get_field('head_phones')[0]['tel_number']); ?>"><?php echo get_field('head_phones')[0]['tel_number'];?></a></div>
        </div>
      </div>
    </div>
    <div class="header-mobile-panel__buttons">
      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#callback">Заказать звонок</button>
    </div>
    <nav class="header-menu">
      <?php wpeHeadNav(); ?>
    </nav>
  </div>
