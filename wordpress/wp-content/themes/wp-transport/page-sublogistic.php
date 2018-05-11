<?php
/*
Template Name: SubLogistic Page
Template Post Type: post, page
*/
get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
      <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
          <div class="container">
              <?php easy_breadcrumbs(); ?>
              <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
              <div class="container-inner">
                  <div class="wrapper">
                      <div class="logistics">
                          <div class="logistics__card">
                              <?php if ( has_post_thumbnail()) :?>
                                <div class="logistics__card-image">
                                  <?php the_post_thumbnail(); ?>
                                </div>
                              <?php endif;?>
                              <div class="row">
                                  <div class="col-xl-8">
                                      <div class="object-card-top__title">Описание</div>
                                      <div class="wysiwyg">
                                        <?php the_content(); ?>
                                      </div>
                                  </div>
                                  <div class="col-xl-4">
                                      <div class="list-simple">
                                          <div class="list-simple__header">Скидки в зависимости от:</div>
                                          <ul>
                                              <li>Объема</li>
                                              <li>Расстояния</li>
                                              <li>Постоянным клиентам</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div class="logistics__card-form">
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <?php $form__code = get_field('logistic_form'); ?>
                                        <?php echo do_shortcode($form__code); ?>
                                      </div>
                                      <?php //the_field('logistic_desc'); ?>
                                      <?php $formImg = get_field('logistic_form_img'); ?>

                                      <div class="col-lg-6">
                                          <div class="logistics__card-form-cover" style="background-image: url(<?php echo $formImg['url']; ?>)"></div>
                                      </div>
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
