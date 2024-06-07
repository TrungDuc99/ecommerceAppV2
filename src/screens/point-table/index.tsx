import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Row, Table } from 'react-native-table-component';

import userService from '@/api/user';
import DialogLoading from '@/components/dialog-loading';
import BackTopBar from '@/ui/core/back-top-bar';
const moment = require('moment');
const PointTable = () => {
  const { data, isLoading } = useQuery(['getPoint'], async () =>
    userService.getInfoPoint(1)
  );
  const [dataRow, setDataRow] = useState([]);
  useEffect(() => {
    const RewardPointRow = data?.RewardPoints.map((point: any) => [
      moment(point.CreatedOn).format('DD/MM/YYYY - HH:mm'),
      point.Points,
      point.PointsBalance,
      point.Message,
    ]);
    setDataRow(RewardPointRow);
  }, [data]);

  const [widthArr, setWidthArr] = useState([120, 60, 80, 200, 120]);

  const [tableHead, setTableHead] = useState([
    'Date',
    'Points',
    'Points balance',
    'Message',
    'End date',
  ]);

  return (
    <View>
      <BackTopBar title="Lịch sử tích điểm" />

      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row
                textStyle={styles.text}
                data={tableHead}
                widthArr={widthArr}
                style={styles.header}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {dataRow?.map((rowData, index: number) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: '#F7F6E7' },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <DialogLoading isShow={isLoading} />
    </View>
  );
};

export default PointTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 15,
    marginBottom: 180,
    backgroundColor: '#fff',
  },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
