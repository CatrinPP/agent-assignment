import React from 'react';
import { connect } from 'react-redux';

import { DataActions } from '../redux/actions';

import Popup from '../components/popup';

class FileUploadPopup extends React.Component {
  constructor(props) {
    super(props);

    // this.inputElement = React.createRef();

    this.state = {
      file: null,
    };
  }

  // onFileChange() {

  // }

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
        onActionBtnClick={() => addPhoto(company.id, file)}
        {...propsForBasePopup}
      >
        <div className='upload-block t-center'>
          <label
            htmlFor='upload'
            className='upload__label'
          >
            {/* Выбрать файл */}
            <input
              className='upload__control'
              id='upload'
              type="file"
              // ref={this.inputElement}
              accept="image/jpeg,image/png,image/jpg"
              onChange={(e) => {
                this.setState({
                  file: e.target.value,
                });
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </label>
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
