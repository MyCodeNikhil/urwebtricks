/**
 * WordPress dependencies
 */
import { createElement } from '@wordpress/element'
import { useSelect, useDispatch } from '@wordpress/data'
import { MenuItem } from '@wordpress/components'
import { __ } from 'ct-i18n'
import { check } from '@wordpress/icons'
import { speak } from '@wordpress/a11y'

/**
 * Internal dependencies
 */
import { store as interfaceStore } from './interface/store/'

export default function MoreMenuFeatureToggle({
	scope,
	label,
	info,
	messageActivated,
	messageDeactivated,
	shortcut,
	feature,
}) {
	const isActive = useSelect(
		(select) => select(interfaceStore).isFeatureActive(scope, feature),
		[feature]
	)
	const { toggleFeature } = useDispatch(interfaceStore)
	const speakMessage = () => {
		if (isActive) {
			speak(messageDeactivated || __('Feature deactivated', 'blocksy'))
		} else {
			speak(messageActivated || __('Feature activated', 'blocksy'))
		}
	}

	return (
		<MenuItem
			icon={isActive && check}
			isSelected={isActive}
			onClick={() => {
				toggleFeature(scope, feature)
				speakMessage()
			}}
			role="menuitemcheckbox"
			info={info}
			shortcut={shortcut}>
			{label}
		</MenuItem>
	)
}
