<?php
/*
Template Name: Tehnika Page
Template Post Type: post, page
*/
get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent;


      $catargs = array(
      'show_option_all'    => '',
      'show_option_none'   => __('No categories'),
      'orderby'            => 'name',
      'order'              => 'ASC',
      'show_last_update'   => 0,
      'style'              => 'list',
      'show_count'         => 0,
      'hide_empty'         => 0,
      'use_desc_for_title' => 1,
      'child_of'           => 9,
      'feed'               => '',
      'feed_type'          => '',
      'feed_image'         => '',
      'exclude'            => '',
      'exclude_tree'       => '',
      'include'            => '',
      'hierarchical'       => true,
      'title_li'           => '',
      'number'             => NULL,
      'echo'               => 1,
      'depth'              => 2,
      'current_category'   => $postcatID,
      'pad_counts'         => 0,
      'taxonomy'           => 'category',
      'walker'             => 'Walker_Category',
      'hide_title_if_empty' => false,
      'separator'          => '',
    );

    $postargs = array(
      'numberposts' => -1,
      'category'    => $postcatID,
      'orderby'     => 'name',
      'order'       => 'ASC',
      'include'     => array(),
      'exclude'     => array(),
      'meta_key'    => '',
      'meta_value'  =>'',
      'post_type'   => 'post',
      'suppress_filters' => true,
    ); ?>


  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
    <div class="container">
      <div class="row">
        <div class="sidebar hidden-md-down col-lg-3">
          <div class="vertical-menu">
            <ul>
              <?php if($postcatParent != 0){
                wp_list_categories( $catargs );
              }else{
                $posts = get_posts( $postargs );
                foreach($posts as $post){
                  setup_postdata($post);
                  if(get_the_ID() == $postID ){
                  $current = 'current';
                  } else {
                    $current = '';
                  } ?>
                  <li class="lvl-1 <?php echo $current; ?>">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                  </li>
                <?php }
                wp_reset_postdata();
              } ?>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-lg-9">
          <?php easy_breadcrumbs(); ?>
          <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
          <div class="container-inner">
            <div class="wrapper">
              <div class="spec-card">
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
                          $images = get_field('teh_gallery');

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
                    <div class="spec-card__info">
                      <?php if( have_rows('teh_characteristic') ): ?>
                        <h2>Технические характеристики</h2>
                        <?php while ( have_rows('teh_characteristic') ) : the_row(); ?>
                          <div class="spec-card__info-item"><?php the_sub_field('title'); ?>:<b><?php the_sub_field('value'); ?></b></div>
                        <?php  endwhile; ?>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
                <div class="spec-card__info-bottom">
                  <div class="row">
                    <?php if( have_rows('teh_pricec') ): ?>
                      <?php while ( have_rows('teh_pricec') ) : the_row(); ?>
                        <div class="col-md-3"><?php the_sub_field('title'); ?>:<b><?php the_sub_field('value'); ?></b></div>
                      <?php  endwhile; ?>
                    <?php endif; ?>
                  </div>
                </div>
                <div class="spec-card__footer">
                  <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="Автовышка ISUZU ELF (15 метров)">Оставить заявку</button>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <div class="object-card-top__title"></div>
                  <div class="wysiwyg">
                    <?php the_content(); ?>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="list-simple">
                    <div class="list-simple__header">Скидки в зависимости от:</div>
                    <ul>
                      <li>От объема</li>
                      <li>Постоянным клиентам и партнерам</li>
                    </ul>
                  </div>
                </div>
              </div>

              <?php $servposts = get_field('servises');
              if( $servposts ): ?>
                <!-- Ext -->
                <hr>
                <p><?php the_title(); ?> может быть использован при выполнении следующих видов работ:</p>
                <div class="row ext">
                    <?php foreach( $servposts as $post): // variable must be called $post (IMPORTANT) ?>
                        <?php setup_postdata($post); ?>
                          <div class="col-xs-12 col-sm-6 col-md-4 item">
                            <a href="<?php the_permalink(); ?>">
                              <div class="img" title="<?php the_title(); ?>" <?php if ( has_post_thumbnail()) { ?>
                                                                        style="background-image: url(<?php echo the_post_thumbnail_url('small'); ?>)"
                                                                      <?php } else { ?>
                                                                        style="background-image: url(<?php echo catchFirstImage(); ?>)"
                                                                      <?php } ?>></div>
                              <div class="name"><?php the_title(); ?></div>
                            </a>
                          </div>
                    <?php endforeach; ?>
                    <?php wp_reset_postdata(); ?>
                </div><!-- /Ext -->
              <?php endif; ?>

              <a href="<?php echo get_category_link( $postcatID ); ?>" class="btn btn-primary btn-lg mt-5">Вернуться к списку</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php endwhile; endif; ?>





<?php get_footer(); ?>
