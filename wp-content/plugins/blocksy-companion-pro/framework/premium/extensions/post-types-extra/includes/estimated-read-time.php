<?php

class BlocksyAdvancedPostTypesEstimatedReadTime {
	public function __construct() {
		add_filter(
			'blocksy:options:meta:meta_elements',
			function ($layers, $prefix, $computed_cpt) {
				$layers['estimated_read_time'] = [
					'label' => __('Read Time', 'blocksy-companion'),
					// 'options' => []
				];

				return $layers;
			},
			10, 3
		);

		add_filter(
			'blocksy:options:meta:meta_default_elements',
			function ($layers, $prefix, $computed_cpt) {
				$layers[] = [
					'id' => 'estimated_read_time',
					'enabled' => false
				];

				return $layers;
			},
			10, 3
		);

		add_action(
			'blocksy:post-meta:render-meta',
			[$this, 'render_read_time'],
			10, 3
		);
	}

	public function render_read_time($id, $meta, $args) {
		if ($id !== 'estimated_read_time') {
			return;
		}

		$value = $this->get_read_time();

		if (empty(trim($value))) {
			return;
		}

		if ($args['meta_type'] === 'label') {
			$value = '<span>' . __('Read Time', 'blocksy-companion') . '</span>' . $value;
		}

		if ($args['meta_type'] === 'icons' || $args['force_icons']) {
			$value = blc_get_icon([
				'icon_descriptor' => blocksy_akg('icon', $meta, [
					'icon' => 'blc blc-book'
				]),
				'layout' => false
			]) . $value;
		}

		echo blocksy_html_tag(
			'li',
			[],
			$value
		);
	}

	public function get_read_time() {
		global $post;

		if (! $post) {
			return '';
		}

		$content = get_post_field('post_content', $post->ID);

		$match_result = [];

		preg_match(
			'/^[\p{Latin}\p{Common}\p{Greek}\p{Cyrillic}\p{Georgian}\p{Old_Turkic}]+$/u',
			$content,
			$match_result
		);

		if (! empty($match_result)) {
			$word_count = str_word_count(strip_tags($content));
		} else {
			if (function_exists('mb_strlen')) {
				$word_count = mb_strlen(strip_tags($content));
			} else {
				$word_count = str_word_count(strip_tags($content));
			}
		}

		$image_count = substr_count($content, '<img');

		$reading_time = $word_count / 200;
		$image_time = ($image_count * 10) / 60;
		$total_time = round($reading_time + $image_time);

		if (intval($total_time) === 0) {
			// return '';
		}

		$minute = __(' min', 'blocksy-companion');

		if ($total_time > 1) {
			$minute = __(' mins', 'blocksy-companion');
		}

		return $total_time . $minute;
	}
}

