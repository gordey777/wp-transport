<?php
/*
Template Name: Contacts Page
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
            <div class="wysiwyg">
              <!---->
              <h2 style="text-align: center;"><?php the_content(); ?></h2>
              <br>
              <br>
              <br>
              <?php if( have_rows('contacts') ): ?>
                <div class="row" align="center">
                  <?php while ( have_rows('contacts') ) : the_row(); ?>
                    <div class="col-xs-12 col-sm-6">
                      <h3><?php the_sub_field('title'); ?></h3>
                      <?php if(get_sub_field('email')) { ?>
                        <a href="mailto:<?php the_sub_field('email'); ?>"><?php the_sub_field('email'); ?></a>
                      <?php } ?>
                      <br>
                      <?php if(get_sub_field('tel')) { ?>
                        <a href="tel:<?php echo preg_replace("/[^0-9]/","",get_sub_field('tel')); ?>"><?php the_sub_field('tel'); ?></a>
                      <?php } ?>
                    </div>
                  <?php endwhile; ?>
                </div>
              <?php endif; ?>
              <br>
              <br>
              <br>
              <br>
              <h3><?php the_field('cont_adress_title'); ?>:</h3>
              <div class="row">
                <div class="col-xl-12">
                  <h3><?php the_field('cont_adress'); ?></h3>
                </div>
              </div>
              <br>
            </div>

            <div class="row">
              <?php

              $location = get_field('cont_map');

              if( !empty($location) ):
              ?>
              <div class="acf-map">
                <div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
              </div>
              <?php endif; ?>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
<?php get_footer(); ?>
