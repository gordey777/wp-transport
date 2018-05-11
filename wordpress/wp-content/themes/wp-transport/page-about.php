<?php
/*
Template Name: About Page
Template Post Type: post, page
*/
get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent; ?>



  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
      <div class="container-inner">
        <div class="wrapper">
          <?php if( have_rows('buner_nav') ): ?>
            <div class="directions d-flex flex-wrap hidden-md-down">

            <?php while ( have_rows('buner_nav') ) : the_row();
              $abType = get_sub_field('about_link_type');
              $aboutPage = get_sub_field('about_page');
              $aboutCat = get_sub_field('about_category');
              $holder = get_sub_field('img');

              if($abType){
                $abLink = get_permalink($aboutPage);
                $abTitle = get_the_title($aboutPage);
              }else {
                $abLink = get_category_link($aboutCat);
                $abTitle = get_cat_name($aboutCat);
              } ?>

                <a href="<?php echo $abLink;?>" class="direction">
                  <div class="direction__cover" style="background-image: url(<?php echo $holder['url'];?>)"></div>
                  <div class="direction__caption"><?php echo $abTitle;?></div>
                  <div class="direction__bottom"><span>узнать больше</span></div>
                  <div class="direction__video">
                    <video loop="" preload="none">
                      <source src="<?php the_sub_field('video');?>" type="video/mp4"> Your browser does not support the video tag.
                    </video>
                  </div>
                </a>
              <?php endwhile; ?>
            </div>
            <div class="directions d-flex flex-wrap hidden-lg-up">
              <?php while ( have_rows('buner_nav') ) : the_row();
                $abType = get_sub_field('about_link_type');
                $aboutCat = get_sub_field('about_page');
                $aboutPage = get_sub_field('about_category');
                $holder = get_sub_field('img');

                if($abType && !empty($aboutPage)){
                  $abLink = get_permalink($aboutPage);
                  $abTitle = get_the_title($aboutPage);
                }else if(!empty($aboutCat)){
                  $abLink = get_category_link($aboutCat);
                  $abTitle = get_cat_name($aboutCat);
                } ?>

                  <a href="<?php echo $abLink;?>" class="direction">
                    <div class="direction__cover" style="background-image: url(<?php echo $holder['sizes']['medium'];?>)"></div>
                    <div class="direction__caption"><?php echo $abTitle;?></div>
                    <div class="direction__bottom"><span>узнать больше</span></div>
                  </a>
                <?php endwhile; ?>
              </div>
          <?php endif; ?>
          <div class="about-cont">
            <?php if ( has_post_thumbnail()) :?>
              <?php the_post_thumbnail(); ?>
            <?php endif; ?>
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php endwhile; endif; ?>


<?php get_footer(); ?>
