<?php
/*
Template Name: Thanks Page
Template Post Type: post, page
*/
get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php $postID = get_the_ID(); ?>
    <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
        <div class="container-inner">
          <div class="wrapper">
            <div class="messages">
              <?php if( have_rows('thanks') ): ?>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="messages__controls">
                      <div class="messages__control messages__control--prev"></div>
                      <div class="messages__count">
                        <span class="messages__count-current">1</span> / <span class="messages__count-total"></span>
                      </div>
                      <div class="messages__control messages__control--next"></div>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <div class="swiper-container">
                      <div class="swiper-wrapper" id="messages-gallery">
                        <?php while ( have_rows('thanks') ) : the_row(); ?>
                          <?php $img = get_sub_field('thanks_img'); ?>
                          <div class="swiper-slide">
                            <a href="<?php echo $img['url']; ?>" class="message">
                              <img src="<?php echo $img['sizes']['medium']; ?>" alt="<?php the_sub_field('title'); ?>">
                            </a>
                            <?php //the_sub_field('thanks_content'); ?>
                          </div>
                        <?php endwhile; ?>
                      </div>
                    </div>
                  </div>
                </div>
              <?php endif; ?>
              <div class="row">
                <div class="col-md-12">
                  <div class="wysiwyg">
                    <?php the_content(); ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
<?php get_footer(); ?>
