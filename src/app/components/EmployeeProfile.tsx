import React from 'react'
import { useDispatch } from 'react-redux'
import { IEmployeeProfile } from 'app/actions/employee'
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


const Wrapper = styled.div`
  /* 레이아웃 */
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  right: 0;
  padding: ${Constants.Theme.rightWrapperPadding}px;
  overflow-y: scroll;
  margin: 0 auto;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // maxWidth: 360,
      // backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    infoHeader: {
      paddingBottom: '10px',
    },
    listSubheader: {
      color: Constants.Theme.black,
      fontWeight: 'bold',
    },
  }),
);

export interface Props {
  profile: IEmployeeProfile,
}

export const EmployeeProfile = ({profile }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Wrapper>
      <h3 className={classes.infoHeader}> 회원 정보 </h3>
      <div><Avatar alt={profile.info.first_name} src={profile.info.avatar}/></div>

      <List className={classes.root} subheader={<li />}>
        {[0, 1].map((sectionId) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              {sectionId === 0 && <ListSubheader className={classes.listSubheader}> 기본 정보 </ListSubheader>}
              {sectionId === 0 && 
              <div>
                <ListItem key={`item-${sectionId}-${profile.info.id}`}>
                  <ListItemText primary={`Id:   ${profile.info.id}` }/>
                </ListItem>
                <ListItem key={`item-${sectionId}-${profile.info.email}`}>
                  <ListItemText primary={`이메일:   ${profile.info.email}` }/>
                </ListItem>
                <ListItem key={`item-${sectionId}-${profile.info.first_name}`}>
                  <ListItemText primary={`이름:   ${profile.info.first_name} ${profile.info.last_name}` }/>
                </ListItem>
              </div>
              }

              {sectionId === 1 && <ListSubheader className={classes.listSubheader}> 상세 정보 </ListSubheader>}
              {sectionId === 1 && 
              <div>
                <ListItem key={`item-${sectionId}-${profile.name}`}>
                  <ListItemText primary={`닉네임:   ${profile.name}` }/>
                </ListItem>
                <ListItem key={`item-${sectionId}-${profile.year}`}>
                  <ListItemText primary={`시작기간:   ${profile.year} `}/>
                </ListItem>
                <ListItem key={`item-${sectionId}-${profile.pantone_value}`}>
                  <ListItemText primary={`코드:   ${profile.pantone_value}` }/>
                </ListItem>
                <ListItem key={`item-${sectionId}-${profile.color}`}>
                  <ListItemText primary={`좋아하는 색:   ${profile.color}` }/>
                </ListItem>
              </div>
              }
            </ul>
          </li>
        ))}
      </List>

    </Wrapper>
  )
}