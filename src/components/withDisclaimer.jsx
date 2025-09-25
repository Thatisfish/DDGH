// src/components/withDisclaimer.jsx
import SafetyDisclaimer from "./SafetyDisclaimer";

export function withDisclaimer(Component, config) {
	return function Wrapped(props) {
		return (
			<>
				<SafetyDisclaimer {...config} />
				<Component {...props} />
			</>
		);
	};
}
