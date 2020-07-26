import React from 'react';
import styles from './GradeStars.module.sass';
import AppContext from '../../context'


class GradeStars extends React.Component {
    render() {
        const { myKey, myGrade, children, nonClick } = this.props;

        let grade1class;
        let grade2class;
        let grade3class;

        switch (myGrade) {
            case 1:
                grade1class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                grade2class = nonClick ? styles.gradeElementNonClick : styles.gradeElement
                grade3class = nonClick ? styles.gradeElementNonClick : styles.gradeElement
                break;
            case 2:
                grade1class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                grade2class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                grade3class = nonClick ? styles.gradeElementNonClick : styles.gradeElement
                break;
            case 3:
                grade1class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                grade2class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                grade3class = nonClick ? styles.gradeElementLightNonClick : styles.gradeElementLight
                break;
        }

        return (
            <>
                {nonClick ?
                    (
                        <div className={styles.gradeBox}>
                            <div id='1' className={grade1class}></div>
                            <div id='2' className={grade2class}></div>
                            <div id='3' className={grade3class}></div>
                            <p className={styles.gradeInfo}>{children}</p>
                        </div>
                    ) : (
                        <div className={styles.gradeBox}>
                            <button id='1' onClick={(e) => this.context.handleGradeChange(e, myKey)} className={grade1class}></button>
                            <button id='2' onClick={(e) => this.context.handleGradeChange(e, myKey)} className={grade2class}></button>
                            <button id='3' onClick={(e) => this.context.handleGradeChange(e, myKey)} className={grade3class}></button>
                            <p className={styles.gradeInfo}>{children}</p>
                        </div>
                    )
                }
            </>
        )
    }
};
GradeStars.contextType = AppContext;
export default GradeStars;

