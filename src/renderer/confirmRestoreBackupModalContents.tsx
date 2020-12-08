import React from 'react';
import { Title, PrimaryButton } from '@getflywheel/local-components';



const ConfirmRestoreBackupModalContents = (props) => {
	const { onSubmit } = props;

	return (
		<div>
			<Title size="l" container={{ margin: 'm 30 30'}}>Restore from backup</Title>
			<br />
			Restoring an image from backup will permanantly delete the compressed image and replace it with the original image. The backup will not be deleted.
			<br/>

			<PrimaryButton
				onClick={onSubmit}
			>
				Confirm
			</PrimaryButton>
		</div>
	);
}

export default ConfirmRestoreBackupModalContents;