import React from 'react';
import { CKEditor, CKEditorConfig } from 'ckeditor4-react';

import TBox from 'components/box';

export type TEditorProps = CKEditorConfig;

function TEditor({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...props
}: TEditorProps) {
  return (
    <TBox margin={margin} marginTop={marginTop} marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} {...props}>
      <CKEditor
        config={{
          filebrowserBrowseUrl: 'https://te11cli.herokuapp.com/images',
          filebrowserUploadMethod: 'form',
          filebrowserUploadUrl: 'https://te11cli.herokuapp.com/cloudinary-upload',
          image_previewText: 'Hiện chưa có ảnh',
          toolbarCanCollapse: true,
          ...props,
        }}
      />
    </TBox>
  );
}

export default TEditor;