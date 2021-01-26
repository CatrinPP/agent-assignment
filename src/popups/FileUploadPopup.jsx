import React from 'react';
import { connect } from 'react-redux';

import { DataActions } from '../redux/actions';

import Popup from '../components/popup';

class FileUploadPopup extends React.Component {
  constructor(props) {
    super(props);

    this.fileReader = null;

    this.state = {
      file: null,
    };
  }

  render() {
    const {
      popupId = 'FileUploadPopup',
      popupData: {
        propsForBasePopup: {
          closeCallBack = () => {},
        } = {},
        propsForBasePopup = {},
      },
      addPhoto,
      company,
    } = this.props;

    const { file } = this.state;

    return (
      <Popup
        popupId={popupId}
        closeCallBack={closeCallBack}
        actionBtnText='Сохранить'
        onActionBtnClick={() => {
          const formData = new FormData();
          formData.append('file', file);
          addPhoto(company.id, formData);
        }}
        {...propsForBasePopup}
      >
        <div className='upload t-center'>
          <label
            htmlFor='upload'
            className='upload__label button  button--add'
          >
            <input
              className='upload__control'
              id='upload'
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              onChange={(e) => this.setState({file: e.target.files[0]})}
              onClick={(e) => e.stopPropagation()}
            />
            <span>Выберите файл</span>
          </label>
          <p className="upload__selected">{ file ? file.name : 'Файл не выбран' }</p>
        </div>
      </Popup>
    );
  }
}

export default connect(
  (state) => ({
    company: state.DataReducer.company,
  }),
  (dispatch) => ({
    addPhoto: (companyId, file) => {
      dispatch(DataActions.addPhoto(companyId, file));
    },
  }),
)(FileUploadPopup);
