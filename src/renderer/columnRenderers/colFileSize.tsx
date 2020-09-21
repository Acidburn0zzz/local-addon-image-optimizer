import React from 'react';

import {
		IVirtualTableCellRendererDataArgs
	} from '@getflywheel/local-components';

export const colFileSize = (
	dataArgs: IVirtualTableCellRendererDataArgs,
	) =>  {

	const convertToMb = () => {
		return Math.round(dataArgs.cellData / 1024) + ' MB';
	}

	const fileSize = dataArgs.isHeader ? dataArgs.cellData : convertToMb();

		return(
			<div>
				{fileSize}
			</div>
		);
};