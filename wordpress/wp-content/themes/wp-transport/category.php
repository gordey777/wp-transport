<?php get_header(); ?>
  <?php $curr__ID = get_queried_object()->cat_ID; ?>
  <?php $curr_term = 'category_' . $curr__ID; ?>
  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>




<?php if ( in_category( 9 ) || post_is_in_descendant_category( 9 ) ) :
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
      'current_category'   => $curr__ID,
      'pad_counts'         => 0,
      'taxonomy'           => 'category',
      'walker'             => 'Walker_Category',
      'hide_title_if_empty' => false,
      'separator'          => '',
    );
?>
<div class="page__content">
    <div class="container">
      <div class="row">
        <div class="sidebar hidden-md-down col-lg-3">
          <div class="vertical-menu">
            <ul>
              <?php wp_list_categories( $catargs ); ?>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-lg-9">
          <?php easy_breadcrumbs(); ?>
          <h1 class="page__header"><?php echo get_queried_object()->name; ?></h1>
          <div class="container-inner">
            <div class="wrapper">
              <div class="spec-list">
                <div class="row">
                  <div class="col-12">
                    <div class="wysiwyg">
                      <?php echo category_description(); ?>
                    </div>
                  </div>
                </div>

                <?php if (have_posts()): while (have_posts()) : the_post(); ?>

                  <div id="post-<?php the_ID(); ?>" <?php post_class('looper spec-list__item'); ?>>
                    <div class="spec-list__item-header">
                      <a rel="nofollow" href="<?php the_permalink(); ?>" class="spec-list__item-title"><?php the_title(); ?></a>
                      <a rel="nofollow" href="<?php the_permalink(); ?>" class="spec-list__item-more">Узнать больше</a>
                    </div>
                    <div class="spec-list__item-body mb-3">
						<?php if ( has_post_thumbnail()) {
							$thumb_url = the_post_thumbnail_url(get_the_ID(), 'medium');
                      	} else if(get_field('teh_gallery')) {
	                       $thumb_url =  get_field('teh_gallery')[0]['sizes']['medium'];
                      	} else {
	                       $thumb_url =  catchFirstImage();
	                      } ?>

                      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="spec-list__item-preview" style="background-image: url(<?php echo $thumb_url; ?>)">></a>

                      <div class="spec-list__item-content">
                        <?php if( have_rows('teh_pricec') ): ?>
                          <div class="spec-list__item-content-left">
                            <?php while ( have_rows('teh_pricec') ) : the_row(); ?>
                              <div class="spec-list__item-content-item"><?php the_sub_field('title'); ?>:<b><?php the_sub_field('value'); ?></b></div>
                            <?php  endwhile; ?>
                          </div>
                        <?php endif; ?>

                        <?php if( have_rows('teh_characteristic') ): ?>
                          <div class="spec-list__item-content-right">
                            <?php while ( have_rows('teh_characteristic') ) : the_row(); ?>
                              <div class="spec-list__item-content-item"><?php the_sub_field('title'); ?>:<b><?php the_sub_field('value'); ?></b></div>
                            <?php  endwhile; ?>
                          </div>
                        <?php endif; ?>

                      </div>
                    </div>
                    <div class="text-right">
                      <button id="orderButton" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#order" data-order="<?php the_title(); ?>">Оставить заявку</button>
                    </div>
                  </div>
                <?php endwhile; endif; ?>
                <div class="clearfix"></div>
                <?php get_template_part('pagination'); ?>
                <div class="row">
                  <div class="col-12">
                    <div class="wysiwyg">
                      <?php the_field('category_content', $curr_term); ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php else :?>

  <div class="page__content">
    <div class="container">
          <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php echo $cat_title; ?></h1>
      <div class="container-inner">
        <div class="wrapper">
          <div class="spec-categories">
            <div class="row">
              <?php
              $teh_cats = get_categories( array(
                'child_of' => $curr__ID,
                'parent' => $curr__ID,
                'hide_empty' => 0
              ) );
              if( $teh_cats ){
                foreach( $teh_cats as $cat ){
                  $teh_catID = $cat->cat_ID;
                  $cutTerm = 'category_'.$teh_catID;
                  //var_dump($cut_term);
                  $cut_thumb = get_field('cat_img', $cutTerm);

                  if($cut_thumb){
                    $thumb_url = $cut_thumb['sizes']['medium'];
                  } else {
                    $thumb_url = get_template_directory_uri() . '/img/noimage.jpg';
                  } ?>
                  <div class='looper col-sm-6 col-md-4 col-lg-3'>
                    <a href="<?php echo get_category_link( $teh_catID ); ?>" title="<?php echo $cat->name; ?>" class="spec-categories__item">
                      <div class="spec-categories__item-cover" style="background-image: url(<?php echo $thumb_url; ?>)" ></div>
                      <div class="spec-categories__item-footer"><?php echo $cat->name . $cut_term; ?></div>
                    </a>
                  </div><!-- /looper -->

                <?php }
              } else if (have_posts()) {
                while (have_posts()) : the_post(); ?>
                <div id="post-<?php the_ID(); ?>" <?php post_class('looper col-sm-6 col-md-4 col-lg-3'); ?>>

                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="spec-categories__item">
                  <div class="spec-categories__item-cover"
                    <?php if ( has_post_thumbnail()) { ?>
                      style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                    <?php } else { ?>
                      style="background-image: url(<?php echo catchFirstImage(); ?>)"
                    <?php } ?>></div>
                  <div class="spec-categories__item-footer"><?php the_title(); ?></div>
                </a>
                </div><!-- /looper -->
              <?php endwhile;
            } ?>
              <div class="clearfix"></div>
              <?php get_template_part('pagination'); ?>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
<?php get_footer(); ?>
