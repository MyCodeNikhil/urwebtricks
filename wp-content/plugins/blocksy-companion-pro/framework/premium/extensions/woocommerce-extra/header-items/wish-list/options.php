<?php

$options = [
	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy-companion' ),
		'type' => 'tab',
		'options' => [

			'wishlist_item_type' => [
				'label' => false,
				'type' => 'ct-image-picker',
				'value' => 'type-1',
				'attr' => [
					'data-type' => 'background',
					'data-columns' => '3',
				],
				'divider' => 'bottom',
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [

					'type-1' => [
						'src'   => blocksy_image_picker_file( 'wishlist-1' ),
						'title' => __( 'Type 1', 'blocksy-companion' ),
					],

					'type-2' => [
						'src'   => blocksy_image_picker_file( 'wishlist-2' ),
						'title' => __( 'Type 2', 'blocksy-companion' ),
					],

					'type-3' => [
						'src'   => blocksy_image_picker_file( 'wishlist-3' ),
						'title' => __( 'Type 3', 'blocksy-companion' ),
					],
				],
			],

			'wishlist_icon_size' => [
				'label' => __( 'Icon Size', 'blocksy-companion' ),
				'type' => 'ct-slider',
				'min' => 5,
				'max' => 50,
				'value' => 15,
				'responsive' => true,
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'has_wishlist_badge' => [
				'label' => __( 'Icon Badge', 'blocksy-companion' ),
				'type' => 'ct-switch',
				'value' => 'yes',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			'wishlist_label_visibility' => [
				'label' => __( 'Label Visibility', 'blocksy-companion' ),
				'type' => 'ct-visibility',
				'design' => 'block',
				'allow_empty' => true,
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => [
					'desktop' => false,
					'tablet' => false,
					'mobile' => false,
				],

				'choices' => blocksy_ordered_keys([
					'desktop' => __( 'Desktop', 'blocksy-companion' ),
					'tablet' => __( 'Tablet', 'blocksy-companion' ),
					'mobile' => __( 'Mobile', 'blocksy-companion' ),
				]),
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [
					'any' => [
						'wishlist_label_visibility/desktop' => true,
						'wishlist_label_visibility/tablet' => true,
						'wishlist_label_visibility/mobile' => true,
					]
				],
				'options' => [
					'wishlist_label_position' => [
						'type' => 'ct-radio',
						'label' => __( 'Label Position', 'blocksy-companion' ),
						'value' => 'left',
						'view' => 'text',
						'divider' => 'top',
						'design' => 'block',
						'responsive' => [ 'tablet' => 'skip' ],
						'choices' => [
							'left' => __( 'Left', 'blocksy-companion' ),
							'right' => __( 'Right', 'blocksy-companion' ),
							'bottom' => __( 'Bottom', 'blocksy-companion' ),
						],
					],

					'wishlist_label' => [
						'label' => __( 'Label Text', 'blocksy-companion' ),
						'type' => 'text',
						'divider' => 'top',
						'design' => 'block',
						'value' => __( 'Wishlist', 'blocksy-companion' ),
						'sync' => 'live'
					],
				],
			],

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy-companion' ),
		'type' => 'tab',
		'options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [
					'any' => [
						'wishlist_label_visibility/desktop' => true,
						'wishlist_label_visibility/tablet' => true,
						'wishlist_label_visibility/mobile' => true,
					]
				],
				'options' => [
					'wishlist_label_font' => [
						'type' => 'ct-typography',
						'label' => __( 'Label Font', 'blocksy-companion' ),
						'value' => blocksy_typography_default_values([
							'size' => '12px',
							'variation' => 'n6',
							'text-transform' => 'uppercase',
						]),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-labeled-group',
						'label' => __( 'Label Font Color', 'blocksy-companion' ),
						'responsive' => true,
						'choices' => [
							[
								'id' => 'header_wishlist_font_color',
								'label' => __('Default State', 'blocksy-companion')
							],

							[
								'id' => 'transparent_header_wishlist_font_color',
								'label' => __('Transparent State', 'blocksy-companion'),
								'condition' => [
									'row' => '!offcanvas',
									'builderSettings/has_transparent_header' => 'yes',
								],
							],

							[
								'id' => 'sticky_header_wishlist_font_color',
								'label' => __('Sticky State', 'blocksy-companion'),
								'condition' => [
									'row' => '!offcanvas',
									'builderSettings/has_sticky_header' => 'yes',
								],
							],
						],
						'options' => [
							'header_wishlist_font_color' => [
								'label' => __( 'Font Color', 'blocksy-companion' ),
								'type'  => 'ct-color-picker',
								'design' => 'block:right',
								'responsive' => true,
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],

									'hover' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],
								],

								'pickers' => [
									[
										'title' => __( 'Initial', 'blocksy-companion' ),
										'id' => 'default',
										'inherit' => 'var(--color)'
									],

									[
										'title' => __( 'Hover', 'blocksy-companion' ),
										'id' => 'hover',
										'inherit' => 'var(--linkHoverColor)'
									],
								],
							],

							'transparent_header_wishlist_font_color' => [
								'label' => __( 'Font Color', 'blocksy-companion' ),
								'type'  => 'ct-color-picker',
								'design' => 'block:right',
								'responsive' => true,
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],

									'hover' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],
								],

								'pickers' => [
									[
										'title' => __( 'Initial', 'blocksy-companion' ),
										'id' => 'default',
									],

									[
										'title' => __( 'Hover', 'blocksy-companion' ),
										'id' => 'hover',
									],
								],
							],

							'sticky_header_wishlist_font_color' => [
								'label' => __( 'Font Color', 'blocksy-companion' ),
								'type'  => 'ct-color-picker',
								'design' => 'block:right',
								'responsive' => true,
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],

									'hover' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],
								],

								'pickers' => [
									[
										'title' => __( 'Initial', 'blocksy-companion' ),
										'id' => 'default',
									],

									[
										'title' => __( 'Hover', 'blocksy-companion' ),
										'id' => 'hover',
									],
								],
							],
						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],
				],
			],


			blocksy_rand_md5() => [
				'type' => 'ct-labeled-group',
				'label' => __( 'Icon Color', 'blocksy-companion' ),
				'responsive' => true,
				'choices' => [
					[
						'id' => 'header_wishlist_icon_color',
						'label' => __('Default State', 'blocksy-companion')
					],

					[
						'id' => 'transparent_header_wishlist_icon_color',
						'label' => __('Transparent State', 'blocksy-companion'),
						'condition' => [
							'row' => '!offcanvas',
							'builderSettings/has_transparent_header' => 'yes',
						],
					],

					[
						'id' => 'sticky_header_wishlist_icon_color',
						'label' => __('Sticky State', 'blocksy-companion'),
						'condition' => [
							'row' => '!offcanvas',
							'builderSettings/has_sticky_header' => 'yes',
						],
					],
				],
				'options' => [
					'header_wishlist_icon_color' => [
						'label' => __( 'Icon Color', 'blocksy-companion' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'default' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'hover' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial', 'blocksy-companion' ),
								'id' => 'default',
								'inherit' => 'var(--color)',
							],

							[
								'title' => __( 'Hover', 'blocksy-companion' ),
								'id' => 'hover',
								'inherit' => 'var(--paletteColor2)',
							],
						],
					],

					'transparent_header_wishlist_icon_color' => [
						'label' => __( 'Icon Color', 'blocksy-companion' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'default' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'hover' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial', 'blocksy-companion' ),
								'id' => 'default',
							],

							[
								'title' => __( 'Hover', 'blocksy-companion' ),
								'id' => 'hover',
							],
						],
					],

					'sticky_header_wishlist_icon_color' => [
						'label' => __( 'Icon Color', 'blocksy-companion' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'default' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'hover' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial', 'blocksy-companion' ),
								'id' => 'default',
							],

							[
								'title' => __( 'Hover', 'blocksy-companion' ),
								'id' => 'hover',
							],
						],
					],
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-labeled-group',
				'label' => __( 'Badge Color', 'blocksy' ),
				'responsive' => true,
				'divider' => 'top',
				'choices' => [
					[
						'id' => 'header_wishlist_badge_color',
						'label' => __('Default State', 'blocksy'),
						'condition' => [
							'has_wishlist_badge' => 'yes',
						],
					],

					[
						'id' => 'transparent_header_wishlist_badge_color',
						'label' => __('Transparent State', 'blocksy'),
						'condition' => [
							'row' => '!offcanvas',
							'has_wishlist_badge' => 'yes',
							'builderSettings/has_transparent_header' => 'yes',
						],
					],

					[
						'id' => 'sticky_header_wishlist_badge_color',
						'label' => __('Sticky State', 'blocksy'),
						'condition' => [
							'row' => '!offcanvas',
							'has_wishlist_badge' => 'yes',
							'builderSettings/has_sticky_header' => 'yes',
						],
					],
				],
				'options' => [

					'header_wishlist_badge_color' => [
						'label' => __( 'Badge Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'background' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'text' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Background', 'blocksy' ),
								'id' => 'background',
								'inherit' => 'var(--paletteColor1)',
							],

							[
								'title' => __( 'Text', 'blocksy' ),
								'id' => 'text',
								'inherit' => '#ffffff',
							],
						],
					],

					'transparent_header_wishlist_badge_color' => [
						'label' => __( 'Badge Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'divider' => 'top',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'background' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'text' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Background', 'blocksy' ),
								'id' => 'background',
							],

							[
								'title' => __( 'Text', 'blocksy' ),
								'id' => 'text',
							],
						],
					],

					'sticky_header_wishlist_badge_color' => [
						'label' => __( 'Badge Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block:right',
						'divider' => 'top',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'background' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],

							'text' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Background', 'blocksy' ),
								'id' => 'background',
							],

							[
								'title' => __( 'Text', 'blocksy' ),
								'id' => 'text',
							],
						],
					],

				],
			],

			'header_wishlist_margin' => [
				'label' => __( 'Margin', 'blocksy' ),
				'type' => 'ct-spacing',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => blocksy_spacing_value([
					'linked' => true,
				]),
				'responsive' => true
			],

		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [ 'wp_customizer_current_view' => 'tablet|mobile' ],
		'options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			'header_wishlist_visibility' => [
				'label' => __( 'Element Visibility', 'blocksy' ),
				'type' => 'ct-visibility',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],
				'allow_empty' => true,
				'value' => [
					'tablet' => true,
					'mobile' => true,
				],

				'choices' => blocksy_ordered_keys([
					'tablet' => __( 'Tablet', 'blocksy' ),
					'mobile' => __( 'Mobile', 'blocksy' ),
				]),
			],

		],
	],
];
