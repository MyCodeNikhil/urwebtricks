<?php

class BlocksyExtensionCodeSnippets {
	public function __construct() {
		add_action('wp_head', function () {
			$this->output_scripts('header_scripts');
		}, 50);

		add_action('wp_body_open', function () {
			$this->output_scripts('header_after_body_scripts');
		}, 50);

		add_action('wp_footer', function () {
			$this->output_scripts('footer_scripts');
		}, 5);

		add_filter('blocksy_extensions_metabox_post_bottom', function ($opts) {
			$opts[blocksy_rand_md5()] = [
				'type' => 'ct-divider',
			];

			$opts['header_footer_scripts_panel'] = [
				'label' => __( 'Custom Code Snippets', 'blocksy-companion' ),
				'type' => 'ct-panel',
				'wrapperAttr' => [ 'data-label' => 'heading-label' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [
					'header_scripts' => [
						'type' => 'textarea',
						'value' => ''
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'header_after_body_scripts' => [
						'label' => __( 'After body open scripts', 'blocksy-companion' ),
						'type' => 'textarea',
						'value' => ''
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'footer_scripts' => [
						'type' => 'textarea',
						'value' => ''
					],
				]
			];

			return $opts;
		});

		add_filter('blocksy_extensions_metabox_page_bottom', function ($opts) {
			$opts[blocksy_rand_md5()] = [
				'type' => 'ct-divider',
			];

			$opts['header_footer_scripts_panel'] = [
				'label' => __( 'Custom Code Snippets', 'blocksy-companion' ),
				'type' => 'ct-panel',
				'wrapperAttr' => [ 'data-label' => 'heading-label' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [
					'header_scripts' => [
						'type' => 'textarea',
						'value' => ''
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'header_after_body_scripts' => [
						'label' => __( 'After body open scripts', 'blocksy-companion' ),
						'type' => 'textarea',
						'value' => ''
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'footer_scripts' => [
						'type' => 'textarea',
						'value' => ''
					],
				]
			];

			return $opts;
		});

		add_filter('blocksy_extensions_customizer_options', function ($opts) {
			$opts['header_footer_scripts'] = [
				'title' => __( 'Custom Code Snippets', 'blocksy-companion' ),
				'container' => [ 'priority' => 8 ],
				'options' => [
					'header_footer_scripts_section_options' => [
						'type' => 'ct-options',
						'setting' => [ 'transport' => 'postMessage' ],
						'inner-options' => [

							'header_scripts' => [
								'type' => 'textarea',
								'value' => ''
							],

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							'header_after_body_scripts' => [
								'label' => __( 'After body open scripts', 'blocksy-companion' ),
								'type' => 'textarea',
								'value' => ''
							],

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							'footer_scripts' => [
								'type' => 'textarea',
								'value' => ''
							],
						],
					],
				]
			];

			return $opts;
		});
	}

	private function output_scripts($id) {
		$scripts = get_theme_mod($id, '');

		if (! empty($scripts)) {
			echo $scripts;
		}

		global $post;

		if ($post && function_exists('blocksy_get_post_options')) {
			$atts = blocksy_get_post_options($post->ID);

			if (is_singular() && ! empty(blocksy_akg($id, $atts, ''))) {
				echo blocksy_akg($id, $atts, '');
			}
		}
	}
}

