import React from 'react';

import { Button, Banner } from '@getflywheel/local-components';
import LastOptimizeStatus from './lastOptimizeStatus';

interface IProps {
	setOverviewSelected: (x: boolean) => void,
	handleScanForImages: () => void,
	scanImageState: GenericObject,
}

export const Overview = (props: IProps) => {
	const { setOverviewSelected, handleScanForImages, scanImageState } = props;
	const { scannedImages, lastUpdated, totalDeductions, totalFileSizeDeductions, totalImageOptimized } = scanImageState;
	const scannedImagesCount = scannedImages.imageCount || 0;

	return <div className="overview_Container">
		{scannedImagesCount > 0 &&
			<Banner variant="warning" icon="warning" buttonText={'View Images'} buttonOnClick={() => setOverviewSelected(false)}>
				We've found <strong>{scannedImagesCount}</strong>images slowing down your site.
			</Banner>
		}

		<LastOptimizeStatus
			lastUpdated={lastUpdated}
			totalDeductions={totalDeductions}
			totalFileSizeDeductions={totalFileSizeDeductions}
			totalImageOptimized={totalImageOptimized}
		/>

		{/* // TODO-abotz: Need designs from Julie to update this */}
		<div>
			{scanImageState.scanLoading && 'Loading...'}
			<Button onClick={() => handleScanForImages()}>Placeholder Scan Button (REMOVE)</Button>
		</div>
	</div>

}