<?php
/*
Template Name: Object Page
Template Post Type: post, page
*/
get_header(); ?>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent;
    ?>

  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
      <div class="container-inner">
        <div class="wrapper">
          <div class="object-card">
            <div class="object-card-top">
              <div class="row">
                <div class="col-lg-6">
                  <div class="object-card__slider-preview">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <?php if ( has_post_thumbnail()) :?>
                          <div data-src="<?php the_post_thumbnail_url(); ?>" class="swiper-slide">
                            <img src="<?php the_post_thumbnail_url('medium'); ?>">
                          </div>
                        <?php endif;
                        $images = get_field('teh_gallery');

                        if( $images ): ?>
                          <?php foreach( $images as $image ): ?>
                            <div data-src="<?php echo $image['url']; ?>" class="swiper-slide">
                              <img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>">
                            </div>
                          <?php endforeach; ?>
                        <?php endif; ?>

                      </div>
                    </div>
                  </div>
                  <div class="object-card__slider">
                    <div class="object-card__slide-prev"></div>
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <?php if ( has_post_thumbnail()) :?>
                          <div class="swiper-slide">
                            <img src="<?php the_post_thumbnail_url('small-icon'); ?>" alt="">
                          </div>
                        <?php endif;
                        $images = get_field('obj_gallery');

                        if( $images ): ?>
                          <?php foreach( $images as $image ): ?>
                            <div  class="swiper-slide">
                              <img src="<?php echo $image['sizes']['small-icon']; ?>" alt="<?php echo $image['alt']; ?>">
                            </div>
                          <?php endforeach; ?>
                        <?php endif; ?>
                      </div>
                    </div>
                    <div class="object-card__slide-next"></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="object-card-top__right">
                    <div class="object-card-top__person">
                      <div class="object-card-top__person-status"></div>
                    </div>
                    <div class="object-card-top__text"><?php the_field('object_desc'); ?></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-9">
                <div class="object-card-top__title">Описание проекта</div>
                <div class="wysiwyg">
                  <?php the_title(); ?>
                  <br>
                  <br>
                  <?php the_content(); ?>
                </div>
            </div>
          </div>
          <a href="<?php echo get_category_link( $postcatID ); ?>" class="btn btn-primary btn-lg mt-5">Вернуться к списку</a>
        </div>
      </div>
    </div>
  </div>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
