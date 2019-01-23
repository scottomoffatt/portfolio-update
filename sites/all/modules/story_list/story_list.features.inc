<?php

/**
 * Implementation of hook_ctools_plugin_api().
 */
function story_list_ctools_plugin_api() {
  module_load_include('inc', 'story_list', 'story_list.defaults');
  $args = func_get_args();
  return call_user_func_array('_story_list_ctools_plugin_api', $args);
}

/**
 * Implementation of hook_default_page_manager_pages().
 */
function story_list_default_page_manager_pages() {
  module_load_include('inc', 'story_list', 'story_list.defaults');
  $args = func_get_args();
  return call_user_func_array('_story_list_default_page_manager_pages', $args);
}

/**
 * Implementation of hook_views_default_views().
 */
function story_list_views_default_views() {
  module_load_include('inc', 'story_list', 'story_list.features.views');
  $args = func_get_args();
  return call_user_func_array('_story_list_views_default_views', $args);
}
